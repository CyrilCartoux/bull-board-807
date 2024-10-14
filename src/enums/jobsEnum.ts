export enum JobsEnum {
    fetchTransactionFromNmpAndInsertInDatabase = 'fetchTransactionFromNmpAndInsertInDatabase',
    fetchPrivacyTransaction = 'fetchPrivacyTransaction',
    fetchAndBroadcastWaitingTransactions = 'fetchAndBroadcastWaitingTransactions',
    sendTransaction = 'sendTransaction',
    reSendTransaction = 'reSendTransaction',

    trackPendingTransaction = 'trackPendingTransaction',
    updateGasPrice = 'updateGasPrice',
    updateTransactionInNMP = 'updateTransactionInNMP'
}
