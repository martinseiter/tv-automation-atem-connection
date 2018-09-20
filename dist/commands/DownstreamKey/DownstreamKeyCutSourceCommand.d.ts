/// <reference types="node" />
import AbstractCommand from '../AbstractCommand';
export declare class DownstreamKeyCutSourceCommand extends AbstractCommand {
    rawName: string;
    downstreamKeyerId: number;
    properties: {
        input: number;
    };
    serialize(): Buffer;
    updateProps(newProps: {
        input: number;
    }): void;
}