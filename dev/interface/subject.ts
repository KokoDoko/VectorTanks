/// <reference path="observer.ts" />

interface Subject {
    subscribe(o:Observer):void;
    unSubscribe(o:Observer):void;
}