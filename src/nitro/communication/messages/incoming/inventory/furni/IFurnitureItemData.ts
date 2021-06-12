﻿import { IObjectData } from '../../../../../room/object/data/IObjectData';

export interface IFurnitureItemData
{
    itemId: number;
    furniType: string;
    ref: number;
    spriteId: number;
    category: number;
    stuffData: IObjectData;
    isGroupable: boolean;
    isRecycleable: boolean;
    tradable: boolean;
    sellable: boolean;
    secondsToExpiration: number;
    flatId: number;
    slotId: string;
    songId: number;
    extra: number;
    rentable: boolean;
    isWallItem: boolean;
    hasRentPeriodStarted: boolean;
    expirationTimeStamp: number;
    creationDay: number;
    creationMonth: number;
    creationYear: number;
    isExternalImageFurni: boolean;
}
