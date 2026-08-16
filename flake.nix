{
  description = "Provides tools for developing a Neocities site";

  inputs.nixpkgs.url = "git+https://github.com/NixOS/nixpkgs?shallow=1&ref=nixpkgs-unstable";

  outputs =
    { self, nixpkgs }:
    let
      allSystems = nixpkgs.lib.genAttrs nixpkgs.lib.platforms.all;
      forAllSystems = passPkgs: allSystems (system: passPkgs (import nixpkgs { inherit system; }));
    in
    {
      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShell {
          name = "neocities";

          packages = [
            pkgs.neocities
            pkgs.hugo
            pkgs.dart-sass

            (pkgs.writeShellScriptBin "ncp" "hugo build && neocities push --prune public")
            (pkgs.writeShellScriptBin "ncinfo" "neocities info mimvoid")
            (pkgs.writeShellScriptBin "hs" "hugo server --baseURL=https://mimvoid.neocities.org --appendPort=false")
          ];
        };
      });
    };
}
