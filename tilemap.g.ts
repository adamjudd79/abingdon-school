// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Test":
            case "level1":return tiles.createTilemap(hex`10001000010707070707070707070707070707080209090909090909090909090909090602090909090909090909090a0a0a09060209090a0a0a09090909090a090a09060209090a0a0a09090909090a0a0a090602090909090909090909090909090906020909090909090909090909090909060209090909090909090909090909090602090a0909090909090909090909090602090a090909090909090909090909060209090909090909090a0a0a0a0a09060209090909090909090a0a0a0a0a090602090909090909090909090909090906020909090909090909090909090909060209090909090909090909090909040603040404040404040404040404040405`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
