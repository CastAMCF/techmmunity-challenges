import requests

location = input("Nome da cidade: ")

link = "http://api.weatherapi.com/v1/current.json?key=b1bc01726d4e4d84931211224211606&q=" + location + "&aqi=no"

response = requests.get(link)
parse = response.json()

if response.status_code == 200:
    print("\nTemperatura em ºC: " + str(parse['current'].get('temp_c')))
    print("Temperatura em ºF: " + str(parse['current'].get('temp_f')))
elif response.status_code == 401:
    print(parse['error'].get('message'))
elif response.status_code == 400:
    if parse['error'].get('code') == 1003:
        print(parse['error'].get('message'))
    elif parse['error'].get('code') == 1006:
        print(parse['error'].get('message'))
else:
    print("Erro desconhecido.")