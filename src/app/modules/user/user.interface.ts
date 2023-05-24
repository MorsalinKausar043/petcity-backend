export interface IUser {
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    },
    gender: string,
    email?: string,
    contactNo: number,
    currentAddress: string,
    permanentAddress: string;
};