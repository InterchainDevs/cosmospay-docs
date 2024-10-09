---
outline: deep
title: Payment status
head:
  - - meta
    - name: description
      content: Declaration of payment statuses of the CosmosPay plugin for WooCommerce and PrestaShop
---
# Payment status
Once an order has been created, the order will have an associated payment status. Below we'll explain each status, and visualize the payment flow.

| Payment Status  | Description                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| Completed       | Payment validated on the blockchain and successfully received                                          |
| Processing      | Payment detected on the blockchain but not yet processed                                               |
| Pending payment | Order created, awaiting payment                                                                        |
| Cancelled       | Payment request cancelled. Time limit (1 hour) reached, and/or payment differed from what was expected |
| Refunded        | Refund transaction validated on the blockchain and successfully broadcasted                            |
| Failed          | Payment unsuccessful and/or differed                                                                   |

### Payment Flow

![payment-flow](/image/payment-flow.png)

- A consumer selects the products in a webshop and decides to pay with a Cosmos-SDK based cryptocurrency.
- The consumer selects one of the enabled cryptocurrencies.
- The plugin fetches the conversion rate from the price of the products and the value of the selected cryptocurrency. The conversion is automatically made and the required amount to pay is shown.
- If the consumer decides to use Keplr Wallet, the plugin automatically fills the destination wallet address for the funds. The memo and the amount will be automatically added as well, these are needed to to recognize the right transaction on the blockchain. 
- For a manual transaction the consumer has to manually copy the destination wallet address, memo and amount to the desired wallet and do the transaction from there
- If the transaction has been broadcasted on the blockchain, the plugin will monitor the blockchain for the transaction. For a payment to be picked up. the address, amount and memo have to match. If the transaction is approved, it is shown to the consumer and the order is successfully paid for.