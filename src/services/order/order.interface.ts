export interface IOrder {
    data_pedido_concluido: string | null;
    data_pedido_realizado: Date;
    id: number;
    idCliente: number;
    idEntrega: number;
    idNotaFiscal: number;
    idPagamento: number;
    idPedidoStatus: number;
    pedido_concluido: boolean;
  }