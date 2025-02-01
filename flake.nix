{
  description = "Provides tools for developing a Neocities site";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

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
              (writeShellScriptBin "hs" "hugo server")
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
