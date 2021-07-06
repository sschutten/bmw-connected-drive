export enum RemoteServiceExecutionStateDetailed {
    UNKNOWN = "UNKNOWN",
    OTHER_SERVICE_WITH_PROVISIONING_RUNNING = "OTHER_SERVICE_WITH_PROVISIONING_RUNNING",
    PROVISIONING_STARTED = "PROVISIONING_STARTED",
    SMS_DELIVERED_TO_GATEWAY = "SMS_DELIVERED_TO_GATEWAY",
    PROVISIONING_FINISHED = "PROVISIONING_FINISHED",
    SMS_DELIVERED_TO_VEHICLE = "SMS_DELIVERED_TO_VEHICLE",
    DLQ_MESSAGE_PROVIDED = "DLQ_MESSAGE_PROVIDED",
    DLQ_MESSAGE_FETCHED = "DLQ_MESSAGE_FETCHED",
    UPLINK_MESSAGE_ACK = "UPLINK_MESSAGE_ACK",
    DEPROVISIONING_STARTED = "DEPROVISIONING_STARTED",
    DEPROVISIONING_FINISHED = "DEPROVISIONING_FINISHED"
}