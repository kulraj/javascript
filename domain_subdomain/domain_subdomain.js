
function subdomainName(link, domain) {
    "use strict";
    /*global alert: true*/
    var subdomain;
    if (domain === link) {
        return;
    }

    subdomain = link.replace("." + domain, "");
    alert("subdomain: " + subdomain);

}

function domainName(url) {
    "use strict";
    var expression_for_link, expression_for_domain, linkarray, link, domain;
    expression_for_link = "://(.[^/]+)/";
    linkarray = url.value.match(expression_for_link);
    link = linkarray[linkarray.length - 1];

    expression_for_domain = "[a-zA-Z0-9]+[.](com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}[/])";
    domain = url.value.match(expression_for_domain)[0];
    alert("domain: " + domain);
    subdomainName(link, domain);
}

function extractDomainSubdomain() {
    "use strict";
    /*jslint browser: true*/
    var url;

    url = document.getElementById("url");
    domainName(url);
}
