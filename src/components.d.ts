/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AndreCard {
    }
    interface AndreComponent {
        "titolo": string;
    }
    interface MoholeArticle {
        "textArticle": string;
        "textArticle2": string;
        "textArticle3": string;
        "titleArticle": string;
        "titleArticle2": string;
        "titleArticle3": string;
    }
    interface MoholeMenu {
    }
    interface MoholeTitle {
        "titleString": string;
    }
    interface NamedSlotParagraph {
    }
    interface SimpleLabel {
    }
    interface SlotParagraph {
    }
}
declare global {
    interface HTMLAndreCardElement extends Components.AndreCard, HTMLStencilElement {
    }
    var HTMLAndreCardElement: {
        prototype: HTMLAndreCardElement;
        new (): HTMLAndreCardElement;
    };
    interface HTMLAndreComponentElement extends Components.AndreComponent, HTMLStencilElement {
    }
    var HTMLAndreComponentElement: {
        prototype: HTMLAndreComponentElement;
        new (): HTMLAndreComponentElement;
    };
    interface HTMLMoholeArticleElement extends Components.MoholeArticle, HTMLStencilElement {
    }
    var HTMLMoholeArticleElement: {
        prototype: HTMLMoholeArticleElement;
        new (): HTMLMoholeArticleElement;
    };
    interface HTMLMoholeMenuElement extends Components.MoholeMenu, HTMLStencilElement {
    }
    var HTMLMoholeMenuElement: {
        prototype: HTMLMoholeMenuElement;
        new (): HTMLMoholeMenuElement;
    };
    interface HTMLMoholeTitleElement extends Components.MoholeTitle, HTMLStencilElement {
    }
    var HTMLMoholeTitleElement: {
        prototype: HTMLMoholeTitleElement;
        new (): HTMLMoholeTitleElement;
    };
    interface HTMLNamedSlotParagraphElement extends Components.NamedSlotParagraph, HTMLStencilElement {
    }
    var HTMLNamedSlotParagraphElement: {
        prototype: HTMLNamedSlotParagraphElement;
        new (): HTMLNamedSlotParagraphElement;
    };
    interface HTMLSimpleLabelElement extends Components.SimpleLabel, HTMLStencilElement {
    }
    var HTMLSimpleLabelElement: {
        prototype: HTMLSimpleLabelElement;
        new (): HTMLSimpleLabelElement;
    };
    interface HTMLSlotParagraphElement extends Components.SlotParagraph, HTMLStencilElement {
    }
    var HTMLSlotParagraphElement: {
        prototype: HTMLSlotParagraphElement;
        new (): HTMLSlotParagraphElement;
    };
    interface HTMLElementTagNameMap {
        "andre-card": HTMLAndreCardElement;
        "andre-component": HTMLAndreComponentElement;
        "mohole-article": HTMLMoholeArticleElement;
        "mohole-menu": HTMLMoholeMenuElement;
        "mohole-title": HTMLMoholeTitleElement;
        "named-slot-paragraph": HTMLNamedSlotParagraphElement;
        "simple-label": HTMLSimpleLabelElement;
        "slot-paragraph": HTMLSlotParagraphElement;
    }
}
declare namespace LocalJSX {
    interface AndreCard {
    }
    interface AndreComponent {
        "titolo"?: string;
    }
    interface MoholeArticle {
        "textArticle"?: string;
        "textArticle2"?: string;
        "textArticle3"?: string;
        "titleArticle"?: string;
        "titleArticle2"?: string;
        "titleArticle3"?: string;
    }
    interface MoholeMenu {
    }
    interface MoholeTitle {
        "titleString"?: string;
    }
    interface NamedSlotParagraph {
    }
    interface SimpleLabel {
    }
    interface SlotParagraph {
    }
    interface IntrinsicElements {
        "andre-card": AndreCard;
        "andre-component": AndreComponent;
        "mohole-article": MoholeArticle;
        "mohole-menu": MoholeMenu;
        "mohole-title": MoholeTitle;
        "named-slot-paragraph": NamedSlotParagraph;
        "simple-label": SimpleLabel;
        "slot-paragraph": SlotParagraph;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "andre-card": LocalJSX.AndreCard & JSXBase.HTMLAttributes<HTMLAndreCardElement>;
            "andre-component": LocalJSX.AndreComponent & JSXBase.HTMLAttributes<HTMLAndreComponentElement>;
            "mohole-article": LocalJSX.MoholeArticle & JSXBase.HTMLAttributes<HTMLMoholeArticleElement>;
            "mohole-menu": LocalJSX.MoholeMenu & JSXBase.HTMLAttributes<HTMLMoholeMenuElement>;
            "mohole-title": LocalJSX.MoholeTitle & JSXBase.HTMLAttributes<HTMLMoholeTitleElement>;
            "named-slot-paragraph": LocalJSX.NamedSlotParagraph & JSXBase.HTMLAttributes<HTMLNamedSlotParagraphElement>;
            "simple-label": LocalJSX.SimpleLabel & JSXBase.HTMLAttributes<HTMLSimpleLabelElement>;
            "slot-paragraph": LocalJSX.SlotParagraph & JSXBase.HTMLAttributes<HTMLSlotParagraphElement>;
        }
    }
}
