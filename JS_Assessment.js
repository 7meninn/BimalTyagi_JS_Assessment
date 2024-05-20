/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
const storeNFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_brand, _model, _engine, _color, _topspeed)
{
    const newNFT = {
        "Brand" : _brand,
        "Model" : _model,
        "Engine": _engine,
        "Color" : _color,
        "TopSpeed" : _topspeed
    };
    storeNFT.push(newNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs ()
{
    console.log("All Minted \"NFTs\" MetaData : -->")
    for (let i = 0; i < storeNFT.length; i++)
    {
        console.log("\n", "-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-", "\n");
        console.log("Brand    -->  " + storeNFT[i]["Brand"]);
        console.log("Model    -->  " + storeNFT[i]["Model"]);
        console.log("Engine   -->  " + storeNFT[i]["Engine"]);
        console.log("Color    -->  " + storeNFT[i]["Color"]);
        console.log("TopSpeed -->  " + storeNFT[i]["TopSpeed"]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nNFTs Minted Total --> ", storeNFT.length, "\n");
}

// Functions called :-
// mintNFT called

mintNFT("Azton Matin", "Valk", "V12", "Sage Green", "350 kmph");
mintNFT("Lamo", "Aventa", "V6", "Rose Red", "200 kmph");
mintNFT("Ferrary", "Roma", "V8", "Quick Silver", "200 kmph");

// getTotalSupply called

getTotalSupply();

// listNFT called

listNFTs();
