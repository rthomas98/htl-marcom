<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageProxyController extends Controller
{
    public function __invoke(Request $request, $path)
    {
        if (!Storage::disk('do_spaces')->exists($path)) {
            abort(404);
        }

        return response()->stream(function () use ($path) {
            $stream = Storage::disk('do_spaces')->readStream($path);
            fpassthru($stream);
            if (is_resource($stream)) {
                fclose($stream);
            }
        }, 200, [
            'Content-Type' => Storage::disk('do_spaces')->mimeType($path),
            'Cache-Control' => 'public, max-age=31536000',
        ]);
    }
}
