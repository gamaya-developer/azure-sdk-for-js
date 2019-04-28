/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const accountId: msRest.OperationURLParameter = {
  parameterPath: "accountId",
  mapper: {
    required: true,
    serializedName: "account_id",
    type: {
      name: "Uuid"
    }
  }
};
export const agedAccountsPayableVendorId: msRest.OperationURLParameter = {
  parameterPath: "agedAccountsPayableVendorId",
  mapper: {
    required: true,
    serializedName: "agedAccountsPayable_vendorId",
    type: {
      name: "Uuid"
    }
  }
};
export const agedAccountsReceivableCustomerId: msRest.OperationURLParameter = {
  parameterPath: "agedAccountsReceivableCustomerId",
  mapper: {
    required: true,
    serializedName: "agedAccountsReceivable_customerId",
    type: {
      name: "Uuid"
    }
  }
};
export const attachmentsId: msRest.OperationURLParameter = {
  parameterPath: "attachmentsId",
  mapper: {
    required: true,
    serializedName: "attachments_id",
    type: {
      name: "Uuid"
    }
  }
};
export const attachmentsParentId: msRest.OperationURLParameter = {
  parameterPath: "attachmentsParentId",
  mapper: {
    required: true,
    serializedName: "attachments_parentId",
    type: {
      name: "Uuid"
    }
  }
};
export const balanceSheetLineNumber: msRest.OperationURLParameter = {
  parameterPath: "balanceSheetLineNumber",
  mapper: {
    required: true,
    serializedName: "balanceSheet_lineNumber",
    type: {
      name: "Number"
    }
  }
};
export const cashFlowStatementLineNumber: msRest.OperationURLParameter = {
  parameterPath: "cashFlowStatementLineNumber",
  mapper: {
    required: true,
    serializedName: "cashFlowStatement_lineNumber",
    type: {
      name: "Number"
    }
  }
};
export const companyId: msRest.OperationURLParameter = {
  parameterPath: "companyId",
  mapper: {
    required: true,
    serializedName: "company_id",
    type: {
      name: "Uuid"
    }
  }
};
export const companyInformationId: msRest.OperationURLParameter = {
  parameterPath: "companyInformationId",
  mapper: {
    required: true,
    serializedName: "companyInformation_id",
    type: {
      name: "Uuid"
    }
  }
};
export const countryRegionId: msRest.OperationURLParameter = {
  parameterPath: "countryRegionId",
  mapper: {
    required: true,
    serializedName: "countryRegion_id",
    type: {
      name: "Uuid"
    }
  }
};
export const currencyId: msRest.OperationURLParameter = {
  parameterPath: "currencyId",
  mapper: {
    required: true,
    serializedName: "currency_id",
    type: {
      name: "Uuid"
    }
  }
};
export const customerFinancialDetailId: msRest.OperationURLParameter = {
  parameterPath: "customerFinancialDetailId",
  mapper: {
    required: true,
    serializedName: "customerFinancialDetail_id",
    type: {
      name: "Uuid"
    }
  }
};
export const customerId: msRest.OperationURLParameter = {
  parameterPath: "customerId",
  mapper: {
    required: true,
    serializedName: "customer_id",
    type: {
      name: "Uuid"
    }
  }
};
export const customerPaymentId: msRest.OperationURLParameter = {
  parameterPath: "customerPaymentId",
  mapper: {
    required: true,
    serializedName: "customerPayment_id",
    type: {
      name: "Uuid"
    }
  }
};
export const customerPaymentJournalId: msRest.OperationURLParameter = {
  parameterPath: "customerPaymentJournalId",
  mapper: {
    required: true,
    serializedName: "customerPaymentJournal_id",
    type: {
      name: "Uuid"
    }
  }
};
export const customerSaleCustomerId: msRest.OperationURLParameter = {
  parameterPath: "customerSaleCustomerId",
  mapper: {
    required: true,
    serializedName: "customerSale_customerId",
    type: {
      name: "Uuid"
    }
  }
};
export const customerSaleCustomerNumber: msRest.OperationURLParameter = {
  parameterPath: "customerSaleCustomerNumber",
  mapper: {
    required: true,
    serializedName: "customerSale_customerNumber",
    type: {
      name: "String"
    }
  }
};
export const customerSaleName: msRest.OperationURLParameter = {
  parameterPath: "customerSaleName",
  mapper: {
    required: true,
    serializedName: "customerSale_name",
    type: {
      name: "String"
    }
  }
};
export const defaultDimensionsDimensionId: msRest.OperationURLParameter = {
  parameterPath: "defaultDimensionsDimensionId",
  mapper: {
    required: true,
    serializedName: "defaultDimensions_dimensionId",
    type: {
      name: "Uuid"
    }
  }
};
export const defaultDimensionsParentId: msRest.OperationURLParameter = {
  parameterPath: "defaultDimensionsParentId",
  mapper: {
    required: true,
    serializedName: "defaultDimensions_parentId",
    type: {
      name: "Uuid"
    }
  }
};
export const dimensionId: msRest.OperationURLParameter = {
  parameterPath: "dimensionId",
  mapper: {
    required: true,
    serializedName: "dimension_id",
    type: {
      name: "Uuid"
    }
  }
};
export const dimensionLineId: msRest.OperationURLParameter = {
  parameterPath: "dimensionLineId",
  mapper: {
    required: true,
    serializedName: "dimensionLine_id",
    type: {
      name: "Uuid"
    }
  }
};
export const dimensionLineParentId: msRest.OperationURLParameter = {
  parameterPath: "dimensionLineParentId",
  mapper: {
    required: true,
    serializedName: "dimensionLine_parentId",
    type: {
      name: "Uuid"
    }
  }
};
export const dimensionValueId: msRest.OperationURLParameter = {
  parameterPath: "dimensionValueId",
  mapper: {
    required: true,
    serializedName: "dimensionValue_id",
    type: {
      name: "Uuid"
    }
  }
};
export const employeeId: msRest.OperationURLParameter = {
  parameterPath: "employeeId",
  mapper: {
    required: true,
    serializedName: "employee_id",
    type: {
      name: "Uuid"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const generalLedgerEntryAttachmentsGeneralLedgerEntryNumber: msRest.OperationURLParameter = {
  parameterPath: "generalLedgerEntryAttachmentsGeneralLedgerEntryNumber",
  mapper: {
    required: true,
    serializedName: "generalLedgerEntryAttachments_generalLedgerEntryNumber",
    type: {
      name: "Number"
    }
  }
};
export const generalLedgerEntryAttachmentsId: msRest.OperationURLParameter = {
  parameterPath: "generalLedgerEntryAttachmentsId",
  mapper: {
    required: true,
    serializedName: "generalLedgerEntryAttachments_id",
    type: {
      name: "Uuid"
    }
  }
};
export const generalLedgerEntryId: msRest.OperationURLParameter = {
  parameterPath: "generalLedgerEntryId",
  mapper: {
    required: true,
    serializedName: "generalLedgerEntry_id",
    type: {
      name: "Number"
    }
  }
};
export const ifMatch: msRest.OperationParameter = {
  parameterPath: "ifMatch",
  mapper: {
    required: true,
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const incomeStatementLineNumber: msRest.OperationURLParameter = {
  parameterPath: "incomeStatementLineNumber",
  mapper: {
    required: true,
    serializedName: "incomeStatement_lineNumber",
    type: {
      name: "Number"
    }
  }
};
export const itemCategoryId: msRest.OperationURLParameter = {
  parameterPath: "itemCategoryId",
  mapper: {
    required: true,
    serializedName: "itemCategory_id",
    type: {
      name: "Uuid"
    }
  }
};
export const itemId: msRest.OperationURLParameter = {
  parameterPath: "itemId",
  mapper: {
    required: true,
    serializedName: "item_id",
    type: {
      name: "Uuid"
    }
  }
};
export const journalId: msRest.OperationURLParameter = {
  parameterPath: "journalId",
  mapper: {
    required: true,
    serializedName: "journal_id",
    type: {
      name: "Uuid"
    }
  }
};
export const journalLineId: msRest.OperationURLParameter = {
  parameterPath: "journalLineId",
  mapper: {
    required: true,
    serializedName: "journalLine_id",
    type: {
      name: "Uuid"
    }
  }
};
export const limit: msRest.OperationQueryParameter = {
  parameterPath: "limit",
  mapper: {
    serializedName: "$limit",
    type: {
      name: "Number"
    }
  }
};
export const paymentMethodId: msRest.OperationURLParameter = {
  parameterPath: "paymentMethodId",
  mapper: {
    required: true,
    serializedName: "paymentMethod_id",
    type: {
      name: "Uuid"
    }
  }
};
export const paymentTermId: msRest.OperationURLParameter = {
  parameterPath: "paymentTermId",
  mapper: {
    required: true,
    serializedName: "paymentTerm_id",
    type: {
      name: "Uuid"
    }
  }
};
export const pdfDocumentId: msRest.OperationURLParameter = {
  parameterPath: "pdfDocumentId",
  mapper: {
    required: true,
    serializedName: "pdfDocument_id",
    type: {
      name: "Uuid"
    }
  }
};
export const pictureId: msRest.OperationURLParameter = {
  parameterPath: "pictureId",
  mapper: {
    required: true,
    serializedName: "picture_id",
    type: {
      name: "Uuid"
    }
  }
};
export const purchaseInvoiceId: msRest.OperationURLParameter = {
  parameterPath: "purchaseInvoiceId",
  mapper: {
    required: true,
    serializedName: "purchaseInvoice_id",
    type: {
      name: "Uuid"
    }
  }
};
export const purchaseInvoiceLineId: msRest.OperationURLParameter = {
  parameterPath: "purchaseInvoiceLineId",
  mapper: {
    required: true,
    serializedName: "purchaseInvoiceLine_id",
    type: {
      name: "String"
    }
  }
};
export const retainedEarningsStatementLineNumber: msRest.OperationURLParameter = {
  parameterPath: "retainedEarningsStatementLineNumber",
  mapper: {
    required: true,
    serializedName: "retainedEarningsStatement_lineNumber",
    type: {
      name: "Number"
    }
  }
};
export const salesCreditMemoId: msRest.OperationURLParameter = {
  parameterPath: "salesCreditMemoId",
  mapper: {
    required: true,
    serializedName: "salesCreditMemo_id",
    type: {
      name: "Uuid"
    }
  }
};
export const salesCreditMemoLineId: msRest.OperationURLParameter = {
  parameterPath: "salesCreditMemoLineId",
  mapper: {
    required: true,
    serializedName: "salesCreditMemoLine_id",
    type: {
      name: "String"
    }
  }
};
export const salesInvoiceId: msRest.OperationURLParameter = {
  parameterPath: "salesInvoiceId",
  mapper: {
    required: true,
    serializedName: "salesInvoice_id",
    type: {
      name: "Uuid"
    }
  }
};
export const salesInvoiceLineId: msRest.OperationURLParameter = {
  parameterPath: "salesInvoiceLineId",
  mapper: {
    required: true,
    serializedName: "salesInvoiceLine_id",
    type: {
      name: "String"
    }
  }
};
export const salesOrderId: msRest.OperationURLParameter = {
  parameterPath: "salesOrderId",
  mapper: {
    required: true,
    serializedName: "salesOrder_id",
    type: {
      name: "Uuid"
    }
  }
};
export const salesOrderLineId: msRest.OperationURLParameter = {
  parameterPath: "salesOrderLineId",
  mapper: {
    required: true,
    serializedName: "salesOrderLine_id",
    type: {
      name: "String"
    }
  }
};
export const salesQuoteId: msRest.OperationURLParameter = {
  parameterPath: "salesQuoteId",
  mapper: {
    required: true,
    serializedName: "salesQuote_id",
    type: {
      name: "Uuid"
    }
  }
};
export const salesQuoteLineId: msRest.OperationURLParameter = {
  parameterPath: "salesQuoteLineId",
  mapper: {
    required: true,
    serializedName: "salesQuoteLine_id",
    type: {
      name: "String"
    }
  }
};
export const select: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "select"
  ],
  mapper: {
    serializedName: "$select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const shipmentMethodId: msRest.OperationURLParameter = {
  parameterPath: "shipmentMethodId",
  mapper: {
    required: true,
    serializedName: "shipmentMethod_id",
    type: {
      name: "Uuid"
    }
  }
};
export const skip: msRest.OperationQueryParameter = {
  parameterPath: "skip",
  mapper: {
    serializedName: "$skip",
    type: {
      name: "Number"
    }
  }
};
export const taxAreaId: msRest.OperationURLParameter = {
  parameterPath: "taxAreaId",
  mapper: {
    required: true,
    serializedName: "taxArea_id",
    type: {
      name: "Uuid"
    }
  }
};
export const taxGroupId: msRest.OperationURLParameter = {
  parameterPath: "taxGroupId",
  mapper: {
    required: true,
    serializedName: "taxGroup_id",
    type: {
      name: "Uuid"
    }
  }
};
export const timeRegistrationEntryId: msRest.OperationURLParameter = {
  parameterPath: "timeRegistrationEntryId",
  mapper: {
    required: true,
    serializedName: "timeRegistrationEntry_id",
    type: {
      name: "Uuid"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: "top",
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};
export const trialBalanceNumber: msRest.OperationURLParameter = {
  parameterPath: "trialBalanceNumber",
  mapper: {
    required: true,
    serializedName: "trialBalance_number",
    type: {
      name: "String"
    }
  }
};
export const unitOfMeasureId: msRest.OperationURLParameter = {
  parameterPath: "unitOfMeasureId",
  mapper: {
    required: true,
    serializedName: "unitOfMeasure_id",
    type: {
      name: "Uuid"
    }
  }
};
export const vendorId: msRest.OperationURLParameter = {
  parameterPath: "vendorId",
  mapper: {
    required: true,
    serializedName: "vendor_id",
    type: {
      name: "Uuid"
    }
  }
};
export const vendorPurchaseName: msRest.OperationURLParameter = {
  parameterPath: "vendorPurchaseName",
  mapper: {
    required: true,
    serializedName: "vendorPurchase_name",
    type: {
      name: "String"
    }
  }
};
export const vendorPurchaseVendorId: msRest.OperationURLParameter = {
  parameterPath: "vendorPurchaseVendorId",
  mapper: {
    required: true,
    serializedName: "vendorPurchase_vendorId",
    type: {
      name: "Uuid"
    }
  }
};
export const vendorPurchaseVendorNumber: msRest.OperationURLParameter = {
  parameterPath: "vendorPurchaseVendorNumber",
  mapper: {
    required: true,
    serializedName: "vendorPurchase_vendorNumber",
    type: {
      name: "String"
    }
  }
};
