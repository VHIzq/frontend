export namespace RegistryListModel {
  export interface Entry {
    id: number;
    name: string;
    status: STATUS;
  }

  export type STATUS = 'enviado' | 'pendiente' | 'eliminado';
}
