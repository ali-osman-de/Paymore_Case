import { Pipe, PipeTransform } from '@angular/core';
import { PaymentTypes } from '../../enums/globalEnums';

@Pipe({
    name: 'transactionPipe',
    standalone: true
})

export class TransactionPipe implements PipeTransform {
    transform(value: number | null | string | undefined): string {
        const transactionsValue = Number(value);
        if (value == null || !Number.isFinite(transactionsValue)) {
            return "-";
        }
        switch (transactionsValue) {
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
}
