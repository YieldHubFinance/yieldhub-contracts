import { Contract } from "@ethersproject/contracts";
import { YieldHubChain } from "./yieldhubChain";
import { chainCallFeeMap } from "./chainCallFeeMap";

export const setCorrectCallFee = async (strategy: Contract, chainName: YieldHubChain) => {
  const expectedCallFee = chainCallFeeMap[chainName];
  const defaultCallFee = await strategy.callFee();
  if (expectedCallFee !== defaultCallFee) {
    console.log(`Setting call fee to '${expectedCallFee}'`)
    await strategy.setCallFee(expectedCallFee);
  }
}