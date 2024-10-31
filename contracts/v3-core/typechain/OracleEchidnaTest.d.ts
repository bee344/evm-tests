/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface OracleEchidnaTestInterface extends ethers.utils.Interface {
  functions: {
    "advanceTime(uint32)": FunctionFragment;
    "checkTimeWeightedAveragesAlwaysFitsType(uint32)": FunctionFragment;
    "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(uint16)": FunctionFragment;
    "echidna_AlwaysInitialized()": FunctionFragment;
    "echidna_canAlwaysObserve0IfInitialized()": FunctionFragment;
    "echidna_cardinalityAlwaysLteNext()": FunctionFragment;
    "echidna_indexAlwaysLtCardinality()": FunctionFragment;
    "grow(uint16)": FunctionFragment;
    "initialize(uint32,int24,uint128)": FunctionFragment;
    "update(uint32,int24,uint128)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "advanceTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTimeWeightedAveragesAlwaysFitsType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_AlwaysInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_canAlwaysObserve0IfInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_cardinalityAlwaysLteNext",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_indexAlwaysLtCardinality",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "grow", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "advanceTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTimeWeightedAveragesAlwaysFitsType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_AlwaysInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_canAlwaysObserve0IfInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_cardinalityAlwaysLteNext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "echidna_indexAlwaysLtCardinality",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export class OracleEchidnaTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: OracleEchidnaTestInterface;

  functions: {
    advanceTime(
      by: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "advanceTime(uint32)"(
      by: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    "checkTimeWeightedAveragesAlwaysFitsType(uint32)"(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(uint16)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "echidna_AlwaysInitialized()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    echidna_canAlwaysObserve0IfInitialized(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "echidna_canAlwaysObserve0IfInitialized()"(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    echidna_cardinalityAlwaysLteNext(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "echidna_cardinalityAlwaysLteNext()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    echidna_indexAlwaysLtCardinality(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "echidna_indexAlwaysLtCardinality()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    grow(
      cardinality: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "grow(uint16)"(
      cardinality: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(uint32,int24,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "update(uint32,int24,uint128)"(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  advanceTime(
    by: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "advanceTime(uint32)"(
    by: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  checkTimeWeightedAveragesAlwaysFitsType(
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkTimeWeightedAveragesAlwaysFitsType(uint32)"(
    secondsAgo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(uint16)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<boolean>;

  "echidna_AlwaysInitialized()"(overrides?: CallOverrides): Promise<boolean>;

  echidna_canAlwaysObserve0IfInitialized(
    overrides?: CallOverrides
  ): Promise<boolean>;

  "echidna_canAlwaysObserve0IfInitialized()"(
    overrides?: CallOverrides
  ): Promise<boolean>;

  echidna_cardinalityAlwaysLteNext(overrides?: CallOverrides): Promise<boolean>;

  "echidna_cardinalityAlwaysLteNext()"(
    overrides?: CallOverrides
  ): Promise<boolean>;

  echidna_indexAlwaysLtCardinality(overrides?: CallOverrides): Promise<boolean>;

  "echidna_indexAlwaysLtCardinality()"(
    overrides?: CallOverrides
  ): Promise<boolean>;

  grow(
    cardinality: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "grow(uint16)"(
    cardinality: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialize(
    time: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(uint32,int24,uint128)"(
    time: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  update(
    advanceTimeBy: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "update(uint32,int24,uint128)"(
    advanceTimeBy: BigNumberish,
    tick: BigNumberish,
    liquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    advanceTime(by: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "advanceTime(uint32)"(
      by: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkTimeWeightedAveragesAlwaysFitsType(uint32)"(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(uint16)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<boolean>;

    "echidna_AlwaysInitialized()"(overrides?: CallOverrides): Promise<boolean>;

    echidna_canAlwaysObserve0IfInitialized(
      overrides?: CallOverrides
    ): Promise<boolean>;

    "echidna_canAlwaysObserve0IfInitialized()"(
      overrides?: CallOverrides
    ): Promise<boolean>;

    echidna_cardinalityAlwaysLteNext(
      overrides?: CallOverrides
    ): Promise<boolean>;

    "echidna_cardinalityAlwaysLteNext()"(
      overrides?: CallOverrides
    ): Promise<boolean>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<boolean>;

    "echidna_indexAlwaysLtCardinality()"(
      overrides?: CallOverrides
    ): Promise<boolean>;

    grow(cardinality: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "grow(uint16)"(
      cardinality: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(uint32,int24,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "update(uint32,int24,uint128)"(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    advanceTime(by: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "advanceTime(uint32)"(
      by: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkTimeWeightedAveragesAlwaysFitsType(uint32)"(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(uint16)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_AlwaysInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    "echidna_AlwaysInitialized()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_canAlwaysObserve0IfInitialized(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "echidna_canAlwaysObserve0IfInitialized()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_cardinalityAlwaysLteNext(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "echidna_cardinalityAlwaysLteNext()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "echidna_indexAlwaysLtCardinality()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grow(cardinality: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "grow(uint16)"(
      cardinality: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(uint32,int24,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "update(uint32,int24,uint128)"(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    advanceTime(
      by: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "advanceTime(uint32)"(
      by: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    checkTimeWeightedAveragesAlwaysFitsType(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkTimeWeightedAveragesAlwaysFitsType(uint32)"(
      secondsAgo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkTwoAdjacentObservationsTickCumulativeModTimeElapsedAlways0(uint16)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_AlwaysInitialized(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "echidna_AlwaysInitialized()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_canAlwaysObserve0IfInitialized(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "echidna_canAlwaysObserve0IfInitialized()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_cardinalityAlwaysLteNext(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "echidna_cardinalityAlwaysLteNext()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    echidna_indexAlwaysLtCardinality(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "echidna_indexAlwaysLtCardinality()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grow(
      cardinality: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "grow(uint16)"(
      cardinality: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialize(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(uint32,int24,uint128)"(
      time: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    update(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "update(uint32,int24,uint128)"(
      advanceTimeBy: BigNumberish,
      tick: BigNumberish,
      liquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
