import { TreeMenu, type TreeNode } from "../../shared/components/TreeMenu";

const treeData: Array<TreeNode> = [
    {
        id: 1,
        title: "Users",
        children: [
            {
                id: 2,
                title: "Administrators",
                children: [
                    {
                        id: 3,
                        title: "Admin 1"
                    },
                    {
                        id: 4,
                        title: "Admin 2"
                    }
                ]
            },
            {
                id: 5,
                title: "Customers",
                children: [
                    {
                        id: 6,
                        title: "Customer 1"
                    },
                    {
                        id: 7,
                        title: "Customer 2"
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Products",
        children: [
            {
                id: 9,
                title: "Electronics",
                children: [
                    {
                        id: 10,
                        title: "Phones"
                    },
                    {
                        id: 11,
                        title: "Laptops"
                    }
                ]
            },
            {
                id: 12,
                title: "Clothing"
            }
        ]
    }
];

export function Component() {
    return (
        <TreeMenu data={treeData} />
    )
}

