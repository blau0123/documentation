// Colors
export const HEADER_COLOR = "#4c8bf5";
export const HEADER_HOVER_COLOR = "#1A73E8";
export const CODE_BLOCK_COLOR = "#283142";

// Sidebar
export const SIDEBAR_CONTENT = [
    {
        parent: "oauth",
        children: ["scopes", "workflow", "authorise", "token"]
    },
    {
        parent: "room bookings",
        children: ["Get Rooms", "Get Bookings"]
    }
];

// Code examples
/*
    Note: tabs are 3 spaces
    Python:
    import requests
    params = {
        "client_id": "123",
        "state": "1"
    }
    r = requests.get("https://ucsdapi.com/oauth/authorise", params)
    print(r.json())

    Javascript:
    fetch("https://uclapi.com/oauth/authorise/?client_id=123.456&state=1")
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json);
        })
*/
export const OATH_AUTHORISE_CODE = {
    python: "import requests\n\nparams = {\n   'client_id': '123',\n   'state': '1'\n}\n\nr = requests.get('https://ucsdapi.com/oauth/authorise', params)\nprint(r.json())",
    javascript: "fetch('https://ucsdapi.com/oauth/authorise/?client_id=123&state=1)\n   .then((response) => {\n      return response.json()\n   })\n   .then((json) => {\n      console.log(json);\n   })"
};

export const TOKEN_CODE = {
    python: "import requests\n\nparams = {\n   'client_id': '123',\n   'code': '1',\n   'client_secret': 'secret'\n}\nr = requests.get('https://ucsdapi.com/oauth/token', params=params)\nprint(r.json())",
    javascript: "fetch('https://uclapi.com/oauth/token?code=mysecretcode&client_id=123.456&client_secret=secret')\n   .then((response) => {\n      return response.json()\n   })\n   .then((json) => {\n      console.log(json);\n   })"
};