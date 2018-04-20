export interface Result {
    name: String;
    trend: String;
    profile: number;
    details: {
        _id?: String;
        title: String;
        description: String;
        identifier: String;
    };
}
