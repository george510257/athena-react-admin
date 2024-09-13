import {DefaultFooter} from "@ant-design/pro-components";
import {GithubOutlined} from "@ant-design/icons";
import React from "react";

/**
 * 页面底部 Footer
 * @constructor 无参数
 */
const Footer: React.FC = () => {
    return (
        <DefaultFooter
            style={{background: 'none'}}
            copyright={"Powered by Athena"}
            links={[
                {
                    key: 'Athena',
                    title: 'Athena',
                    href: 'https://athena.com',
                    blankTarget: true,
                },
                {
                    key: 'github',
                    title: <GithubOutlined/>,
                    href: 'https://github.com/george510257/athena-react-admin',
                    blankTarget: true,
                },
            ]}
        />
    );
};

export default Footer;