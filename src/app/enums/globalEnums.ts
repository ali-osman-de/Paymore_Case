/*
    Normalde kendim bu şekilde getPaymentTypeLabel kullanırdım fakat istenilen ve angularda var olan Pipe özelliği ile birlikte dashboard kısmında bir pipe oluşturdum.
*/

export enum PaymentTypes {
    KrediKarti = 1,
    Nakit = 2,
    OfflineCard = 3,
    IstanbulKart = 4,
    QR = 5,
    METROPOL_QR = 6,
    Paymore_Pay = 7,
    MASTER_QR = 8,
    WALLMORE = 9,
    MULTINET = 10,
    SETCARD = 11
}

export function getPaymentTypeLabel(paymentType: number): string {
    switch (paymentType) {
        case PaymentTypes.KrediKarti:
            return "Kredi Kartı";
        case PaymentTypes.Nakit:
            return "Nakit";
        case PaymentTypes.OfflineCard:
            return "Offline Card";
        case PaymentTypes.IstanbulKart:
            return "İstanbul Kart";
        case PaymentTypes.QR:
            return "QR";
        case PaymentTypes.METROPOL_QR:
            return "METROPOL_QR";
        case PaymentTypes.Paymore_Pay:
            return "Paymore_Pay";
        case PaymentTypes.MASTER_QR:
            return "MASTER_QR";
        case PaymentTypes.WALLMORE:
            return "WALLMORE";
        case PaymentTypes.MULTINET:
            return "MULTINET";
        case PaymentTypes.SETCARD:
            return "SETCARD";
        default:
            return "Bilinmeyen Ödeme Tipi";
    }
}
