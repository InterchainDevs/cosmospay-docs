---
outline: deep
title: Integrating with WooCommerce
head:
  - - meta
    - name: description
      content: Explanation how to integrate the CosmosPay Plugin on your WordPress website
---
# Integrating with WooCommerce
This page explains how to integrate the CosmosPay Plugin on your WordPress website.

### Preparation - Creating your Wallet
Requirements:

- A desktop computer 
- Firefox or Chrome based browser

1. Install and add the [Keplr Browser Extension](https://keplr.app/get/) to your browser by clicking the "Add to Brave" or "Add to Chrome" button depending on your browser **(1)** Click the 'puzzle' icon to open your extension bar **(2)** and click Keplr **(3)** to start the creation of your wallet. 

![Keplr-screen-1](/image/woo-presta-01.png)

2. Choose “Create new account” **(1)**. 

![Keplr-screen-2](/image/woo-presta-02.png)

Make sure to save the seed phrase of your Keplr account in a safe place because your wallet is only recoverable through your seed phrase. We recommend to use 24 words **(1)** for your seed phrase, and backing up your seed phrase in at least 2 different physical locations/hardware (not on your computer as it is prone to malware). 

> [!NOTE]
> Anyone with access to your seed phrase can access your account. BitCanna cannot access or recover your account.

3. Next, choose an account name (not important, just a descriptive name for your wallet) and your password. The reason why you set a password is to avoid filling out the seed phrase to access the wallet. This way your wallet is locally protected. If you ever lose access to your password or your device, you can use the seed phrase to recover your account. 

![Keplr-screen-3](/image/woo-presta-03.png)

4. You’ll now be asked to click the words in the correct order to check if you stored the phrase correctly. When this is completed, click “Register”. You’ve now created your wallet!

![Keplr-screen-4](/image/woo-presta-04.png)

### Installing the Plugin
#### Option A - Install via WordPress (recommended)

1. In your WordPress dashboard, choose “Plugins” **(1)**, “Add New” **(2)**. Search for “CosmosPay” **(3)** and install the plugin **(4)**.

![WooCommerce-screen-5](/image/woo-05.png)

2. Click “Activate” to ready the plugin for use.

3. Once the plugin is activated, click "Accept disclaimer" **(1)** to read & accept the [disclaimer](/pages/faq/disclaimer.md). We recommend to "Enable auto-updates" **(2)** to automatically update the plugin. 

![WooCommerce-screen-6](/image/woo-06.png)

#### Option B - Manual install
1. Download the CosmosPay Plugin from our [Github repository](https://github.com/BitCannaGlobal/cosmospay-woocommerce) as a ZIP file. \
    Direct download: [click here](https://github.com/BitCannaGlobal/cosmospay-woocommerce/archive/refs/heads/main.zip)
2. Unzip the ZIP file and rename the folder inside "cosmospay-woocommerce-main" to "cosmospay". 
3. Zip the file again, the name of the ZIP file itself is not important.
4. In the admin panel of your WordPress website, click on "Plugins" on the left-hand side, and click "Upload Plugin" to upload the correctly named ZIP file from step 1 & 2.
5. Click “Activate” to ready the plugin for use.
6. Once the plugin is activated, read the [disclaimer](/pages/faq/disclaimer.md) and click "Accept disclaimer" to continue.

### Plugin configuration
1. Click “WooCommerce” **(1)** in the left-hand menu of your WordPress dashboard, and then head to “Settings” **(2)**. Head over to the “Payments” tab **(3)** and locate “CosmosPay” and click “Manage” **(4)**.

![WooCommerce-screen-7](/image/woo-07.png)

2. On this page you can add a description, and choose the available cryptocurrencies to accept on your store. Don’t forget to click “Save changes” after you’re done editing.

![WooCommerce-screen-8](/image/woo-08.png)

3. Next up, click “CosmosPay” **(1)** in the left-hand menu.

![WooCommerce-screen-9](/image/woo-09.png)

4. Click “Connect BitCanna” **(1)**, and approve the Keplr pop-ups to add the blockchain to Keplr, and allow WordPress to make calls to your Keplr wallet. Your BitCanna address should be automatically filled out (once multiple cryptocurrencies are supported, you can accept up to as many blockchains you’d like to accept as currency). After filling out the address, our address validation script will check if the address has the correct format. Don’t forget to click “Save Changes” **(2)**!

![WooCommerce-screen-10](/image/woo-10.png)

You’ve now successfully set up the CosmosPay plugin on your webshop. Last but not least, we'll simulate a payment using the plugin.

### Simulating a payment with WooCommerce
1. Head over to your webshop and select the "CosmosPay" payment method to pay for your order.
2. Select your preferred cryptocurrency and your desired method to pay. By default it is recommended to "Pay automatically with Keplr". Click "Next".

![Keplr-screen-11](/image/woo-presta-11.png)

3. The Keplr Extension window will automatically open and prefill your transaction to the receiving address of your webshop, and prefill the memo to identify the transaction. All you need to do is hit "Approve".

![Keplr-screen-12](/image/woo-presta-12.png)

4. Within a couple seconds, the transaction will be verified and approved. That's it. You've now successfully paid for your order. The coins should arrive instantly on your configured receiving address. You can click "View transaction" to check the transaction details.

![Keplr-screen-13](/image/woo-presta-13.png)

