export interface resp {
    ok:  boolean;
    msg: Msg;
}

export interface Msg {
    accepted:     string[];
    rejected:     any[];
    ehlo:         string[];
    envelopeTime: number;
    messageTime:  number;
    messageSize:  number;
    response:     string;
    envelope:     Envelope;
    messageId:    string;
}

export interface Envelope {
    from: string;
    to:   string[];
}
