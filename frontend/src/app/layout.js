"use client";

import React from "react";
import { Inter, Roboto_Mono } from "next/font/google";
import { http, createConfig, WagmiConfig } from "wagmi";
import { hardhat } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

const wagmiConfig = createConfig(
  getDefaultConfig({
    autoConnect: true,
    chains: [hardhat],
    transports: {
      [hardhat.id]: http(),
    },
  })
);

export default function RootLayout({ children }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          <html lang="en">
            <head>
              <title>030325 NFT PROJECT</title>
              <meta name="description" content="NFT NO.1" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
              {children}
            </body>
          </html>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}
