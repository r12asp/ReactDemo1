import { IApplication, IStoreState} from "./../../models";


export const initialState: IStoreState = {
	application: {
        id: 0,
        name: "tt"
    },
    test: {
        testName: "from initialStart"
    },
}