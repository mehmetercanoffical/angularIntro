import { Products } from "./products";
import { ResponseModel } from "./responseModel";

export interface productResponse  extends ResponseModel {
    data:Products[],
}