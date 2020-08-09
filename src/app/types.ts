export type Ships = {
    type: string;
    name: string;
    home_port: string;
}

export type Query = {
    allShips: Ships[];
}