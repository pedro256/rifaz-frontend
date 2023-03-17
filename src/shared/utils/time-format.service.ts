import moment from "moment";

export class TimeFormatService{

    public DateTimeToFormatedText(value:Date):string{
        if (!value) return "";
        return moment(value).format("DD/MM/YYYY") + " ás " + moment(value).format("HH:mm");
    }
}