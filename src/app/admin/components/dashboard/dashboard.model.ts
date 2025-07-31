export namespace DashboardModel {
  export interface RowData {
    rowDataId: string;
    name: string;
    firstLastName: string | null;
    secondsLastName: string | null;
    age: number | null;
    email: string | null;
    cellphone: string | null;
    entryTipe: string | null;
    invitedBy: string | null;
    visitDay: string | null;
    visitTime: string | null;
    street: string | null;
    streetNumber: string | null;
    zipCode: string | null;
    referende: string | null;
    region: string | null;
    state: string | null;
    houseNumber: string | null;
    sex: string | null;
    peaceHouseLeader: string | null;
    peaceHouseNumber: string | null;
    isFirstTimeVisit: boolean | null;
    dateFirstTimeVisit: Date | null;
    network: string | null;
    pastor: string | null;
    discipulador: string | null;
    comments: string | null;
    deleteReason: string | null;
    addBy: string | null;
    createdAt: Date | null;
  }
}