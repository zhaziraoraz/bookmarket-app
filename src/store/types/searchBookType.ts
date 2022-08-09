import { SET_SEARCH_BOOK_FAILED, SET_SEARCH_BOOK_SUCCESS, SET_SEARCH_BOOK_REQUEST } from "../actionTypes";

export interface ISearch {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    volumeInfo: {
        title: string,
        subtitle: string,
        authors: [],
        publisher: string,
        publishedDate: string,
        description: string,
        industryIdentifiers: [],
        readingModes: {
            text: boolean,
            image: boolean
        },
        pageCount: number,
        printType: string,
        categories: [],
        averageRating: number,
        ratingsCount: number,
        maturityRating: string,
        allowAnonLogging: boolean,
        contentVersion: string,
        panelizationSummary: {
            containsEpubBubbles: boolean,
            containsImageBubbles: boolean
        },
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        },
        language: string,
        previewLink: string,
        infoLink: string,
        canonicalVolumeLink: string,
    },
    saleInfo: {
        country: string,
        saleability: string,
        isEbook: boolean,
        listPrice: {
            amount: number,
            currencyCode: string
        },
        retailPrice: {
            amount: number,
            currencyCode: string
        },
        buyLink: string,
        offers: []
    },
    accessInfo: {
        country: string,
        viewability: string,
        embeddable: boolean,
        publicDomain: boolean,
        textToSpeechPermission: string,
        epub: {
            isAvailable: boolean,
            acsTokenLink: string
        },
        pdf: {
            isAvailable: boolean
        },
        webReaderLink: string,
        accessViewStatus: string,
        quoteSharingAllowed: boolean
    },
    searchInfo: {
        textSnippet: string
    }
}

export interface SearchBookState {
    pending: boolean;
    books: [];
    error: string | null;
}

export interface SearchBookSuccessPayload {
    books: []
}

export interface SearchBookFailedPayload {
    error: string
}

export type SearchBookRequest = {
    type: typeof SET_SEARCH_BOOK_REQUEST,
}

export type SearchBookSuccessRequest = {
    type: typeof SET_SEARCH_BOOK_SUCCESS,
    payload: SearchBookSuccessPayload
}

export type SearchBookFailedRequest = {
    type: typeof SET_SEARCH_BOOK_FAILED,
    payload: SearchBookFailedPayload
}

export type SearchBookAction = SearchBookRequest | SearchBookSuccessRequest | SearchBookFailedRequest;