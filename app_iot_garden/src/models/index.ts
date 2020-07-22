export interface IUserAllInfo {
  "nome": string, "Marcos Chen"
  "idUsuario": string, "123456"
  "plantas": Array<IPlanta>,
}

export interface IPlanta {
  "idPlanta": string, "123456-1" 
  "nomePlanta": string, "Samambaia"
  "medicoes": Array<IMedicao>
}

export interface IMedicao {
  "umidade_solo": string, "12"
  "temperatura_solo": string, "20"
  "umidade_ar": string, "70"
  "temperatura_ar": string, "26"
}
