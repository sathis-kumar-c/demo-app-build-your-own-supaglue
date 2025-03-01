/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/health': {
    /** Health check */
    get: operations['public-health']
  }
  '/openapi.json': {
    get: operations['public-getOpenAPISpec']
  }
  '/engagement/v2/contacts': {
    get: operations['salesEngagement-listContacts']
  }
  '/engagement/v2/sequences': {
    get: operations['salesEngagement-listSequences']
  }
  '/engagement/v2/sequenceStates': {
    get: operations['salesEngagement-listSequenceStates']
  }
  '/engagement/v2/users': {
    get: operations['salesEngagement-listUsers']
  }
  '/engagement/v2/accounts': {
    get: operations['salesEngagement-listAccounts']
  }
  '/engagement/v2/mailboxes': {
    get: operations['salesEngagement-listMailboxes']
  }
  '/engagement/v2/accounts/_upsert': {
    post: operations['salesEngagement-upsertAccount']
  }
  '/engagement/v2/contacts/_upsert': {
    post: operations['salesEngagement-upsertContact']
  }
  '/engagement/v2/sequenceState': {
    post: operations['salesEngagement-insertSequenceState']
  }
  '/crm/v2/contacts': {
    get: operations['crm-listContacts']
  }
  '/crm/v2/contacts/{id}': {
    get: operations['crm-getContact']
  }
  '/crm/v2/companies/{id}': {
    get: operations['crm-getCompany']
  }
  '/crm/v2/metadata/objects/standard': {
    get: operations['crm-metadataListStandardObjects']
  }
  '/crm/v2/metadata/objects/custom': {
    get: operations['crm-metadataListCustomObjects']
  }
  '/crm/v2/metadata/properties': {
    get: operations['crm-metadataListProperties']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    /**
     * Error
     * @description The error information
     * @example {
     *   "code": "INTERNAL_SERVER_ERROR",
     *   "message": "Internal server error",
     *   "issues": []
     * }
     */
    'error.INTERNAL_SERVER_ERROR': {
      /**
       * @description The error message
       * @example Internal server error
       */
      message: string
      /**
       * @description The error code
       * @example INTERNAL_SERVER_ERROR
       */
      code: string
      /**
       * @description An array of issues that were responsible for the error
       * @example []
       */
      issues?: {
        message: string
      }[]
    }
    'sales-engagement.contact': {
      id: string
      first_name: string
      last_name: string
      owner_id: string
      account_id?: string
      job_title: string
      address: components['schemas']['sales-engagement.address']
      email_addresses: components['schemas']['sales-engagement.email_addresses']
      phone_numbers: components['schemas']['sales-engagement.phone_numbers']
      open_count: number
      click_count: number
      reply_count: number
      bounced_count: number
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      raw_data?: {
        [key: string]: unknown
      }
    }
    'sales-engagement.address': {
      city: string
      country: string
      postal_code: string
      state: string
      street_1: string
      street_2: string
    }
    'sales-engagement.email_addresses': {
      email_address: string
      /** @enum {string} */
      email_address_type: 'primary' | 'personal' | 'work'
    }[]
    'sales-engagement.phone_numbers': {
      phone_number: string
      /** @enum {string} */
      phone_number_type: 'primary' | 'work' | 'home' | 'mobile' | 'other'
    }[]
    /**
     * Error
     * @description The error information
     * @example {
     *   "code": "BAD_REQUEST",
     *   "message": "Invalid input data",
     *   "issues": []
     * }
     */
    'error.BAD_REQUEST': {
      /**
       * @description The error message
       * @example Invalid input data
       */
      message: string
      /**
       * @description The error code
       * @example BAD_REQUEST
       */
      code: string
      /**
       * @description An array of issues that were responsible for the error
       * @example []
       */
      issues?: {
        message: string
      }[]
    }
    /**
     * Error
     * @description The error information
     * @example {
     *   "code": "NOT_FOUND",
     *   "message": "Not found",
     *   "issues": []
     * }
     */
    'error.NOT_FOUND': {
      /**
       * @description The error message
       * @example Not found
       */
      message: string
      /**
       * @description The error code
       * @example NOT_FOUND
       */
      code: string
      /**
       * @description An array of issues that were responsible for the error
       * @example []
       */
      issues?: {
        message: string
      }[]
    }
    'sales-engagement.sequence': {
      id: string
      name?: string
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      owner_id: string
      tags: string[]
      num_steps: number
      metrics?: {
        [key: string]: unknown
      }
      is_enabled: boolean
      raw_data?: {
        [key: string]: unknown
      }
    }
    'sales-engagement.sequenceState': {
      id: string
      state: string
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      sequence_id: string
      contact_id: string
      mailbox_id: string
      user_id: string
      raw_data?: {
        [key: string]: unknown
      }
    }
    'sales-engagement.user': {
      id: string
      first_name: string
      last_name: string
      email: string
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      raw_data?: {
        [key: string]: unknown
      }
    }
    'sales-engagement.account': {
      id: string
      name: string
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      domain: string
      owner_id: string
      raw_data?: {
        [key: string]: unknown
      }
    }
    'sales-engagement.mailbox': {
      id: string
      email: string
      created_at: string
      updated_at: string
      is_deleted: boolean
      last_modified_at: string
      user_id: string
      raw_data?: {
        [key: string]: unknown
      }
    }
    'crm.contact': {
      id: string
      first_name?: string | null
      last_name?: string | null
    }
    'crm.company': {
      id: string
      name?: string | null
    }
    'crm.metaStandardObject': {
      name: string
    }
    'crm.metaCustomObject': {
      id: string
      name: string
    }
    'crm.metaProperty': {
      /**
       * @description The machine name of the property as it appears in the third-party Provider
       * @example FirstName
       */
      id: string
      /**
       * @description The human-readable name of the property as provided by the third-party Provider.
       * @example First Name
       */
      label: string
      /**
       * @description The type of the property as provided by the third-party Provider. These types are not unified by Supaglue. For Intercom, this is string, integer, boolean, or object. For Outreach, this is integer, boolean, number, array, or string.
       * @example string
       */
      type?: string
      /**
       * @description The raw details of the property as provided by the third-party Provider, if available.
       * @example {}
       */
      raw_details?: {
        [key: string]: unknown
      }
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export interface operations {
  /** Health check */
  'public-health': {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': string
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'public-getOpenAPISpec': {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': unknown
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listContacts': {
    parameters: {
      query?: {
        cursor?: string | null
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            nextPageCursor?: string | null
            items: components['schemas']['sales-engagement.contact'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listSequences': {
    parameters: {
      query?: {
        cursor?: string | null
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            nextPageCursor?: string | null
            items: components['schemas']['sales-engagement.sequence'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listSequenceStates': {
    parameters: {
      query?: {
        cursor?: string | null
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            nextPageCursor?: string | null
            items: components['schemas']['sales-engagement.sequenceState'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listUsers': {
    parameters: {
      query?: {
        cursor?: string | null
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            nextPageCursor?: string | null
            items: components['schemas']['sales-engagement.user'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listAccounts': {
    parameters: {
      query?: {
        cursor?: string | null
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            nextPageCursor?: string | null
            items: components['schemas']['sales-engagement.account'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-listMailboxes': {
    parameters: {
      query?: {
        cursor?: string | null
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            nextPageCursor?: string | null
            items: components['schemas']['sales-engagement.mailbox'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-upsertAccount': {
    requestBody: {
      content: {
        'application/json': {
          record: {
            /** @example My Company */
            name?: string | null
            /** @example mycompany.com */
            domain?: string | null
            /** @example 9f3e97fd-4d5d-4efc-959d-bbebfac079f5 */
            owner_id?: string | null
            /** @example ae4be028-9078-4850-a0bf-d2112b7c4d11 */
            account_id?: string | null
            custom_fields?: {
              [key: string]: unknown
            } | null
          }
          upsert_on: {
            /** @description The name of the account to upsert on. Supported for Outreach, Salesloft, and Apollo. */
            name?: string
            /** @description The domain of the account to upsert on. Only supported for Outreach and Salesloft. */
            domain?: string
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            record?: {
              id: string
            }
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-upsertContact': {
    requestBody: {
      content: {
        'application/json': {
          record: {
            /** @example James */
            first_name?: string | null
            /** @example Smith */
            last_name?: string | null
            /** @example CEO */
            job_title?: string | null
            /**
             * @example {
             *   "city": "San Francisco",
             *   "country": "US",
             *   "postal_code": "94107",
             *   "state": "CA",
             *   "street_1": "525 Brannan",
             *   "street_2": null
             * }
             */
            address: {
              city?: string | null
              country?: string | null
              postal_code?: string | null
              state?: string | null
              street_1?: string | null
              street_2?: string | null
            }
            /**
             * @example [
             *   {
             *     "email_address": "hello@revtron.ai",
             *     "email_address_type": "work"
             *   }
             * ]
             */
            email_addresses: {
              email_address: string
              /** @enum {string|null} */
              email_address_type?: 'primary' | 'personal' | 'work'
            }[]
            /**
             * @example [
             *   {
             *     "phone_number": "+14151234567",
             *     "phone_number_type": "work"
             *   }
             * ]
             */
            phone_numbers: {
              phone_number: string
              /** @enum {string} */
              phone_number_type:
                | 'primary'
                | 'work'
                | 'home'
                | 'mobile'
                | 'other'
            }[]
            /** @example 9f3e97fd-4d5d-4efc-959d-bbebfac079f5 */
            owner_id?: string | null
            /** @example ae4be028-9078-4850-a0bf-d2112b7c4d11 */
            account_id?: string | null
            custom_fields?: {
              [key: string]: unknown
            } | null
          }
          upsert_on: {
            /** @description Contact email to upsert on. Supported for Outreach, Salesloft, and Apollo. */
            email?: string
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            record?: {
              id: string
            }
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'salesEngagement-insertSequenceState': {
    requestBody: {
      content: {
        'application/json': {
          record: {
            /** @example 9f3e97fd-4d5d-4efc-959d-bbebfac079f5 */
            contact_id: string
            /** @example ae4be028-9078-4850-a0bf-d2112b7c4d11 */
            mailbox_id: string
            /** @example b854e510-1c40-4ef6-ade4-8eb35f49d331 */
            sequence_id: string
            /** @example c590dc63-8e43-48a4-8154-1fbb00ac936b */
            user_id?: string | null
          }
        }
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            record?: {
              id: string
            }
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-listContacts': {
    parameters: {
      query?: {
        limit?: number
        offset?: number
        updated_after?: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            hasNextPage: boolean
            items: components['schemas']['crm.contact'][]
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-getContact': {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            record: components['schemas']['crm.contact']
            raw?: unknown
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-getCompany': {
    parameters: {
      path: {
        id: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': {
            record: components['schemas']['crm.company']
            raw?: unknown
          }
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-metadataListStandardObjects': {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': components['schemas']['crm.metaStandardObject'][]
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-metadataListCustomObjects': {
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': components['schemas']['crm.metaCustomObject'][]
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
  'crm-metadataListProperties': {
    parameters: {
      query: {
        type: 'standard' | 'custom'
        name: string
      }
    }
    responses: {
      /** @description Successful response */
      200: {
        content: {
          'application/json': components['schemas']['crm.metaProperty'][]
        }
      }
      /** @description Invalid input data */
      400: {
        content: {
          'application/json': components['schemas']['error.BAD_REQUEST']
        }
      }
      /** @description Not found */
      404: {
        content: {
          'application/json': components['schemas']['error.NOT_FOUND']
        }
      }
      /** @description Internal server error */
      500: {
        content: {
          'application/json': components['schemas']['error.INTERNAL_SERVER_ERROR']
        }
      }
    }
  }
}

export interface oasTypes {
  components: components
  external: external
  operations: operations
  paths: paths
  webhooks: webhooks
}

export default oasTypes
