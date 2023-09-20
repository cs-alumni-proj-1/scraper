interface BankData {
  name: string;
  link: string;
}

interface BankLinkProps {
  data: BankData;
}

export type { BankData, BankLinkProps };
