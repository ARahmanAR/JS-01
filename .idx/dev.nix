# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs ? import (builtins.fetchTarball "https://github.com/NixOS/nixpkgs/archive/24.05.tar.gz") {}, ... }:
{
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.neofetch
    pkgs.nodejs_20
  ];
}
