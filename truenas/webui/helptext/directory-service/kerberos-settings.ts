const T = (str: string) => str;

export const helptextKerberosSettings = {
    ks_appdefaults_tooltip: T(
        'Additional Kerberos application settings.\
 See the "appdefaults" section of\
 <a href="https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html" target="_blank">[krb.conf(5)]</a>.\
 for available settings and usage syntax.',
    ),

    ks_libdefaults_tooltip: T(
        'Additional Kerberos library settings.\
 See the "libdefaults" section of\
 <a href="https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html" target="_blank">[krb.conf(5)]</a>.\
 for available settings and usage syntax.',
    ),
};
