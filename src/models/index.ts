export interface IApplication{
    id?: number;
    name?: string;
}

export interface IStoreState {
    application: IApplication;
}