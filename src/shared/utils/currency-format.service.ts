
export class MoneyParserService{

    public TextToFormatedMoney(value:number,prefix?:string):string{
        if (!Number(value)) return "";
      
        const amount = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        }).format(value );
      
        return `${amount}`;
    }
}