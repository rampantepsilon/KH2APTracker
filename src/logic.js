function markChecks(checkName) {
    switch (checkName) {
        case ("High Jump"):
            document.getElementById('jumpNum').innerHTML = parseInt(document.getElementById('jumpNum').innerHTML) + 1;
            document.getElementById('highjump').style.opacity = '1';
            break;
        case ("Quick Run"):
            document.getElementById('runNum').innerHTML = parseInt(document.getElementById('runNum').innerHTML) + 1;
            document.getElementById('quickrun').style.opacity = '1';
            break;
        case ("Dodge Roll"):
            document.getElementById('dodgeNum').innerHTML = parseInt(document.getElementById('dodgeNum').innerHTML) + 1;
            document.getElementById('dodgeroll').style.opacity = '1';
            break;
        case ("Aerial Dodge"):
            document.getElementById('aerialNum').innerHTML = parseInt(document.getElementById('aerialNum').innerHTML) + 1;
            document.getElementById('aerialdodge').style.opacity = '1';
            break;
        case ("Glide"):
            document.getElementById('glideNum').innerHTML = parseInt(document.getElementById('glideNum').innerHTML) + 1;
            document.getElementById('glide').style.opacity = '1';
            break;
        case ("Fire Element"):
            document.getElementById('fireNum').innerHTML = parseInt(document.getElementById('fireNum').innerHTML) + 1;
            document.getElementById('fire').style.opacity = '1';
            break;
        case ("Blizzard Element"):
            document.getElementById('blizzardNum').innerHTML = parseInt(document.getElementById('blizzardNum').innerHTML) + 1;
            document.getElementById('blizzard').style.opacity = '1';
            break;
        case ("Thunder Element"):
            document.getElementById('thunderNum').innerHTML = parseInt(document.getElementById('thunderNum').innerHTML) + 1;
            document.getElementById('thunder').style.opacity = '1';
            break;
        case ("Cure Element"):
            document.getElementById('cureNum').innerHTML = parseInt(document.getElementById('cureNum').innerHTML) + 1;
            document.getElementById('cure').style.opacity = '1';
            break;
        case ("Reflect Element"):
            document.getElementById('reflectNum').innerHTML = parseInt(document.getElementById('reflectNum').innerHTML) + 1;
            document.getElementById('reflect').style.opacity = '1';
            break;
        case ("Magnet Element"):
            document.getElementById('magnetNum').innerHTML = parseInt(document.getElementById('magnetNum').innerHTML) + 1;
            document.getElementById('magnet').style.opacity = '1';
            break;
        case ("Torn Page"):
            document.getElementById('pageNum').innerHTML = parseInt(document.getElementById('pageNum').innerHTML) + 1;
            document.getElementById('tornpage').style.opacity = '1';
            document.getElementById('100aCount').innerHTML = parseInt(document.getElementById('100aCount').innerHTML) - 1;
            break;
        case ("Lucky Emblem"):
            document.getElementById('emblemNum').innerHTML = parseInt(document.getElementById('emblemNum').innerHTML) + 1;
            document.getElementById('emblem').style.opacity = '1';
            if (playSounds == 1) {
                document.getElementById('lEmblem').play();
            }
            break;
        case ("Valor Form"):
            document.getElementById('valor').style.opacity = '1';
            document.getElementById('valorLvl').innerHTML = '1';
            break;
        case ("Wisdom Form"):
            document.getElementById('wisdom').style.opacity = '1';
            document.getElementById('wisdomLvl').innerHTML = '1';
            break;
        case ("Limit Form"):
            document.getElementById('limit').style.opacity = '1';
            document.getElementById('limitLvl').innerHTML = '1';
            break;
        case ("Master Form"):
            document.getElementById('master').style.opacity = '1';
            document.getElementById('masterLvl').innerHTML = '1';
            break;
        case ("Final Form"):
            document.getElementById('final').style.opacity = '1';
            if (document.getElementById('finalLvl').innerHTML == '0') {
                document.getElementById('finalLvl').innerHTML = '1';
            }
            break;
        case ("Chicken Little"):
            document.getElementById('chickenlittle').style.opacity = '1';
            break;
        case ("Genie"):
            document.getElementById('genie').style.opacity = '1';
            break;
        case ("Stitch"):
            document.getElementById('stitch').style.opacity = '1';
            break;
        case ("Peter Pan"):
            document.getElementById('peterpan').style.opacity = '1';
            break;
        case ("Once More"):
            document.getElementById('oncemore').style.opacity = '1';
            break;
        case ("Second Chance"):
            document.getElementById('secondchance').style.opacity = '1';
            break;
        case ("Proof of Connection"):
            document.getElementById('connection').style.opacity = '1';
            break;
        case ("Proof of Nonexistence"):
            document.getElementById('nonexistence').style.opacity = '1';
            break;
        case ("Proof of Peace"):
            document.getElementById('peace').style.opacity = '1';
            break;
        case ("Promise Charm"):
            document.getElementById('promisecharm').style.opacity = '1';
            break;
        case ("Beast's Claw"):
            document.getElementById('beastNum').innerHTML = parseInt(document.getElementById('beastNum').innerHTML) + 1;
            document.getElementById('beastclaw').style.opacity = '1';
            document.getElementById('bcCount').innerHTML = parseInt(document.getElementById('bcCount').innerHTML) - 1;
            break;
        case ("Bone Fist"):
            document.getElementById('boneNum').innerHTML = parseInt(document.getElementById('boneNum').innerHTML) + 1;
            document.getElementById('bonefist').style.opacity = '1';
            document.getElementById('htCount').innerHTML = parseInt(document.getElementById('htCount').innerHTML) - 1;
            break;
        case ("Proud Fang"):
            document.getElementById('proudNum').innerHTML = parseInt(document.getElementById('proudNum').innerHTML) + 1;
            document.getElementById('proudfang').style.opacity = '1';
            document.getElementById('plCount').innerHTML = parseInt(document.getElementById('plCount').innerHTML) - 1;
            break;
        case ("Battlefields of War"):
            document.getElementById('warNum').innerHTML = parseInt(document.getElementById('warNum').innerHTML) + 1;
            document.getElementById('battlefieldsofwar').style.opacity = '1';
            document.getElementById('ocCount').innerHTML = parseInt(document.getElementById('ocCount').innerHTML) - 1;
            break;
        case ("Sword of the Ancestor"):
            document.getElementById('swordNum').innerHTML = parseInt(document.getElementById('swordNum').innerHTML) + 1;
            document.getElementById('ancestorsword').style.opacity = '1';
            document.getElementById('lodCount').innerHTML = parseInt(document.getElementById('lodCount').innerHTML) - 1;
            break;
        case ("Skill and Crossbones"):
            document.getElementById('skillNum').innerHTML = parseInt(document.getElementById('skillNum').innerHTML) + 1;
            document.getElementById('skillcrossbones').style.opacity = '1';
            document.getElementById('prCount').innerHTML = parseInt(document.getElementById('prCount').innerHTML) - 1;
            break;
        case ("Scimitar"):
            document.getElementById('scimitarNum').innerHTML = parseInt(document.getElementById('scimitarNum').innerHTML) + 1;
            document.getElementById('scimitar').style.opacity = '1';
            document.getElementById('agraCount').innerHTML = parseInt(document.getElementById('agraCount').innerHTML) - 1;
            break;
        case ("Identity Disk"):
            document.getElementById('diskNum').innerHTML = parseInt(document.getElementById('diskNum').innerHTML) + 1;
            document.getElementById('identitydisk').style.opacity = '1';
            document.getElementById('spCount').innerHTML = parseInt(document.getElementById('spCount').innerHTML) - 1;
            break;
        case ("Membership Card"):
            document.getElementById('cardNum').innerHTML = parseInt(document.getElementById('cardNum').innerHTML) + 1;
            document.getElementById('membershipcard').style.opacity = '1';
            document.getElementById('hbCount').innerHTML = parseInt(document.getElementById('hbCount').innerHTML) - 1;
            break;
        case ("Namine Sketches"):
            document.getElementById('sketchesNum').innerHTML = parseInt(document.getElementById('sketchesNum').innerHTML) + 1;
            document.getElementById('picture').style.opacity = '1';
            document.getElementById('sttCount').innerHTML = parseInt(document.getElementById('sttCount').innerHTML) - 1;
            break;
        case ("Ice Cream"):
            document.getElementById('icecreamNum').innerHTML = parseInt(document.getElementById('icecreamNum').innerHTML) + 1;
            document.getElementById('icecream').style.opacity = '1';
            document.getElementById('ttCount').innerHTML = parseInt(document.getElementById('ttCount').innerHTML) - 1;
            break;
        case ("Disney Castle Key"):
            document.getElementById('castleNum').innerHTML = parseInt(document.getElementById('castleNum').innerHTML) + 1;
            document.getElementById('disneycastlekey').style.opacity = '1';
            document.getElementById('dcCount').innerHTML = parseInt(document.getElementById('dcCount').innerHTML) - 1;
            break;
        case ("Way to the Dawn"):
            document.getElementById('dawnNum').innerHTML = parseInt(document.getElementById('dawnNum').innerHTML) + 1;
            document.getElementById('waytothedawn').style.opacity = '1';
            document.getElementById('twtnwCount').innerHTML = parseInt(document.getElementById('twtnwCount').innerHTML) - 1;
            break;
        case ("Bounty"):
            document.getElementById('bountyCount').innerHTML = parseInt(document.getElementById('bountyCount').innerHTML) - 1;
            if (playSounds == 1) {
                document.getElementById('bounty').play();
            }
            break;
    }
}