const { ethers } = require('hardhat');
const { expect } = require('chai');

async function fixture() {
  const signers = await ethers.getSigners();
  const ownable = await ethers.deployContract('$Ownable', [signers[0]]);
  return { owner: signers[0], other: signers[1], ownable };
}

describe('Ownable', function () {
  beforeEach(async function () {
    Object.assign(this, await fixture());
  });

  it('emits ownership transfer events during construction', async function () {
    await expect(this.ownable.deploymentTransaction())
      .to.emit(this.ownable, 'OwnershipTransferred')
      .withArgs(ethers.ZeroAddress, this.owner);
  });

  it('rejects zero address for initialOwner', async function () {
    await expect(ethers.deployContract('$Ownable', [ethers.ZeroAddress]))
      .to.be.revertedWithCustomError({ interface: this.ownable.interface }, 'OwnableInvalidOwner')
      .withArgs(ethers.ZeroAddress);
  });

  it('has an owner', async function () {
    expect(await this.ownable.owner()).to.equal(this.owner);
  });

  describe('transfer ownership', function () {
    it('changes owner after transfer', async function () {
      // console.log('owner: ', await this.ownable.owner())
      // console.log('connect: ', this.ownable.connect(this.owner))
      const connection = this.ownable.connect(this.owner);
      await expect(await connection.transferOwnership(this.other))
        .to.emit(this.ownable, 'OwnershipTransferred')
        // .withArgs(this.owner, this.other);

      expect(await this.ownable.owner()).to.equal(this.other);
    });

    it('prevents non-owners from transferring', async function () {
      await expect(this.ownable.connect(this.other).transferOwnership(this.other))
        .to.be.revertedWithCustomError(this.ownable, 'OwnableUnauthorizedAccount')
        .withArgs(this.other);
    });

    it('guards ownership against stuck state', async function () {
      await expect(this.ownable.connect(this.owner).transferOwnership(ethers.ZeroAddress))
        .to.be.revertedWithCustomError(this.ownable, 'OwnableInvalidOwner')
        .withArgs(ethers.ZeroAddress);
    });
  });

  describe('renounce ownership', function () {
    it('loses ownership after renouncement', async function () {
      await expect(this.ownable.connect(this.owner).renounceOwnership())
        .to.emit(this.ownable, 'OwnershipTransferred')
        .withArgs(this.owner, ethers.ZeroAddress);

      expect(await this.ownable.owner()).to.equal(ethers.ZeroAddress);
    });

    it('prevents non-owners from renouncement', async function () {
      await expect(this.ownable.connect(this.other).renounceOwnership())
        .to.be.revertedWithCustomError(this.ownable, 'OwnableUnauthorizedAccount')
        .withArgs(this.other);
    });

    it('allows to recover access using the internal _transferOwnership', async function () {
      await this.ownable.connect(this.owner).renounceOwnership();

      await expect(this.ownable.$_transferOwnership(this.other))
        .to.emit(this.ownable, 'OwnershipTransferred')
        .withArgs(ethers.ZeroAddress, this.other);

      expect(await this.ownable.owner()).to.equal(this.other);
    });
  });
});
