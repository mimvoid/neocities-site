{
  description = "Provides tools for developing a Neocities site";

  inputs.nixpkgs.url = "git+https://github.com/NixOS/nixpkgs?shallow=1&ref=nixpkgs-unstable";

  outputs = { self, nixpkgs }:
  let
    allSystems = nixpkgs.lib.genAttrs nixpkgs.lib.platforms.all;

    toSystems = passPkgs: allSystems (system:
      passPkgs (import nixpkgs { inherit system; })
    );
  in
  {
    devShells = toSystems (pkgs: {
      default = pkgs.mkShell {
        name = "neocities";

        packages =
          with pkgs;
          let
            aliases = [
              (writeShellScriptBin "ncp" "hugo build && neocities push --prune public")
              (writeShellScriptBin "ncinfo" "neocities info mimvoid")
              (writeShellScriptBin "hs" "hugo server --baseURL=https://mimvoid.neocities.org --appendPort=false")
            ];
          in
          [
            neocities
            hugo
            dart-sass
          ]
          ++ aliases;
      };
    });
  };
}
