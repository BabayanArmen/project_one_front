import { useState } from "react";
import styles from "../../shared/styles/pages/profile.module.scss";

export interface TreeNode {
    id: number,
    title: string,
    children?: Array<TreeNode>
}

export function TreeMenu({  data } : {data : Array<TreeNode>}) {
    return (
        <div className={styles.tree_menu}>
            {data.map((item: TreeNode) => (
                <TreeNode key={item.id} {...item} />
            ))}
        </div>
    )
}

export function TreeNode({ id, title, children }: TreeNode) {
    const [showChildren, setShowChildren] = useState<boolean>(false);

    return (
        <div>
            <div>
                <span>id : {id}</span>
                <span>title : {title}</span>
                {(children && children.length > 0) && (
                    <button onClick={() => setShowChildren(prev => !prev)}>
                        {showChildren ? "▼" : "▶"}
                    </button>
                )}
            </div>
            {(showChildren && children && children.length > 0) && (
                <div className={styles.tree_menu_item}>
                    {children.map((item: TreeNode) => (
                        <TreeNode key={item.id} {...item} />
                    ))}
                </div>
            )}
        </div>
    )
}