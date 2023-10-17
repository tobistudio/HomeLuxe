
// Navbar props
export type INavItem = {
    label: string;
    to: string;
}

export type INavItemProps = {
    subMenu?: INavItem[];
    color?: string;
} & INavItem

// Button props
export type IButtonProps = {
    onClick?: (e: React.ChangeEvent<HTMLButtonElement>) => void;
    border?: string;
    font?: string;
    size?: 'sm' | 'md' | 'lg';
    isicon?: boolean;
    className?: string;
    bg?: string;
    width?: number;
} & React.HTMLAttributes<HTMLElement>;

// TabItem props
export type ITabItemProps = {
    label: string;
    badge: number;
    isactive: boolean;
} & React.HTMLAttributes<HTMLElement>;

// Tabs props
export type ITabsProps = {
    handleClick?: any;
    menuData: Array<ITabItemProps>;
    selectedTab: number;
} & React.HTMLAttributes<HTMLElement>;

// Collection props
export type ICollectionProps = {
    onClick?: (e: any) => void;
    bg: string,
    label: string,
    submenuData: Array<{ label: string }>,
    isVisisble?: boolean
} & React.HTMLAttributes<HTMLElement>;

// Switch Props
export type ISwitchProps = {
    onClick: (e: any) => void;
    isDark: boolean
} & React.HTMLAttributes<HTMLElement>;

// Landing props
export type ILandingProps = {
    mark: string;
    title?: string;
    description?: string;
    bgimage: string;
}

// News props
export type INewsProps = {
    mark: string;
    title?: string;
    subtitle?: string;
    description?: string;
    bgimage: string;
}

// EarnCard props
export type IEarnCardProps = {
    icon?: string;
    title?: string;
    desc?: string;
    color: Array<string>;
}

// tbody object props
export type ITbody = {
    date: string;
    qty: string;
    type: string;
    id: string;
}

// custom table props
export type ITable = {
    headerList: Array<string>;
    dataList: Array<ITbody>;
}

// wallet box props
export type IWalletList = {
    icon: string,
    content: string,
}

export type IWalletProps = {
    walletList: IWalletList[]
}

export type ICategoryCardProps = {
    subtitle: string,
    background: string
}

export type IProductProps = {
    image: string,
    content: string,
    subtitle: string,
    price: number,
    type: string
}

export type IReviewCardProps = {
    bgImage: string,
    avatar: string,
    content: {
        name: string,
        location: string,
        content: string,
        star: number
    }
}

export type IBlogCardProps = {
    date: string,
    subtitle: string,
    title: string,
    content: string,
    image: string
}