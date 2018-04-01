/**
 * The redux store
 */
export interface IStoreState {
    application: IApplication;
    test: ITest;
}

export interface IApplication{
    id?: number;
    name?: string;
}

export interface ITest {
    testName?: string;
}

export interface INameValue {
    name: string;
    value: string;
}

export interface IConfig { 
    apiUrl: string; 
    loginUrl?: string; 
}