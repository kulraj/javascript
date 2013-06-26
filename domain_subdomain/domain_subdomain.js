
function domainName(urlObject) {
    "use strict";
    /*global alert: true*/
    var regex_for_link, regex_for_domain_subdomain, link, domain, subdomain, message;

    regex_for_link = "(http|ftp|https)?(?:://)?([^/]+)/?";

    urlObject.value.match(regex_for_link);
    link = RegExp.$2;

    regex_for_domain_subdomain = "([^/]*)[.]([^.]+.[^.]{2,4})$";
    domain = link.match(regex_for_domain_subdomain);
    if (!domain) {  //given pattern does not match means no subdomain
        domain = link;
        alert("domain: " + domain);
        return;
    }

    domain = RegExp.$2;
    message = "domain: ";
    message += domain;

    subdomain = RegExp.$1;
    message += ", subdomain: " + subdomain;

    alert(message);
}

function extractDomainSubdomain() {
    "use strict";
    /*jslint browser: true*/
    var urlObject;

    urlObject = document.getElementById("urlTextBox");
    domainName(urlObject);
}
