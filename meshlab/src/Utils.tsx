
// file for holdig utility functions (helper functions used by multiple classes)

//breaks project url of any valid gitlab instance (i hope) into a baseUrl example //https:gitlab.stud.idi.ntnu.no
//and the path with '/' replaced by '%2F' ex it2810-/Team-17/project2 
function parseURL(url: string): string[] {
    const reg = /^(?<baseURL>https\:\/\/gitlab\.[a-z\.]+[a-z])\/(?<path>[\w\-?\/]*)$/
    //const urlRE = new RegExp(reg, 'g');
    const match = reg.exec(url);
    if (match && match.groups) {
        return [match.groups.baseURL, match.groups.path.replace(/\//g, "%2F")];
    } else {
        return [];
    }

}

function hello() {

}
console.log(parseURL("jksgr"))

export { hello, parseURL }