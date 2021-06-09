export interface Articulo {
  id?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenPath?: string;
  contactoPropietario: string;
  telefonoPropietario: number;
  imagen?: File;
  usuarioId: number;
  usuario?: string;
}
