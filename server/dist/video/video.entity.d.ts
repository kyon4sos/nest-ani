import { Model } from 'sequelize-typescript';
export declare class Video extends Model {
    id: number;
    thumbnail: string;
    title: string;
    total: number;
    area: string;
    catalog: string;
    originalName: string;
    author: string;
    works: string;
    firstShow: Date;
    showStatus: string;
    kind: string;
    tag: string;
    website: string;
    rank: number;
    retry: number;
    version: number;
}
