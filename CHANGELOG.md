# ember-plupload Changelog

## 1.13.2 (August 10, 2015)
* Fix a bug introduced in 1.13.1 where dropzones were always marked as active.

## 1.13.1 (August 10, 2015)
* Add support for Ember 2.0.0-beta.5. This removes deprecated API calls from the addon (`Ember.keys`, `Ember.Enumerable.filterProperty`, `Ember.Enumerable.findProperty`).

## 1.13.0 (July 13, 2015)
* Allow files to be retried. Call `upload` on files that you'd like to try again to retry them.
* [BREAKING CHANGE] Remove deprecated code. All deprecations from 0.8.1 and below are removed, along with old behavior. Please upgrade to 0.8.1 before upgrading to 1.13.0 to ensure that there are no deprecation warnings.

## 0.8.1 (July 7, 2015)
* Fix HTML4 runtimes by conditionally adding drag and drop params to the uploader.
* Remove long timeouts before starting the upload in the `file.upload` method.

## 0.8.0 (July 6, 2015)
* Change 'when-queued' action handler to 'onfileadd'. This also adds an error handler called 'onerror'.

## 0.7.0 (July 6, 2015)
* Change UploadQueueManager to a service called Uploader with various aggregate properties about all files uploading.

## 0.6.23 (July 6, 2015)
* Fix file uploads for IE9 by increasing the queue timeout to 100ms. Courtesy of @mgrigis

## 0.6.22 (June 30, 2015)
* Handle code paths for beta versions of plupload. Some users of ember-plupload are using this in the wild. Courtesy of @walter

## 0.6.21 (June 14, 2015)
* Allow any 2XX series status to resolve the file upload
* Headers are case-insensitive, which meant that sometimes responses weren't parsed correctly. Courtesy of @raytiley
* Add a longer delay before uploading a file, trying to solve a race condition where settings were incorrectly reset before uploads. Courtesy of @walter

## 0.6.20 (June 12, 2015)
* Include unminified plupload and moxie for development, which helps with debugging issuse with plupload / moxie. Courtesy of @raytiley

## 0.6.19 (June 12, 2015)
* Fixes #19. Attach event listeners after the initial render is complete. This was causing browser crashes on Ember 1.13+. Courtesy of @raytiley

## 0.6.18 (June 11, 2015)
* Uploads that respond with 201s should be resolved instead of rejected. Courtesy of @raytiley

## 0.6.16 (June 3, 2015)
* 0.6.14 had a bug where the stylesheet would never be applied. This also reduces memory usage and DOM churn by sharing the stylesheet across all instances of the uploader.

## 0.6.14 (June 3, 2015)
* Use extracted dynamic stylesheet library, named dinosheets, for disabling pointer events on the dropzone. Installing the new version should properly add the library to your `bower.json`.

## 0.6.12 (May 28, 2015)
* Allow only an url to be passed to upload without any additional options.

## 0.6.11 (May 26, 2015)
* Add deprecation warnings for users of the old syntax (from 0.5.1).
* Remove deprecations for the new computed property syntax. Support for older versions of ember that do not support this will be dropped in 1.0.0.

## 0.6.10 (May 25, 2015)
* Monkeypatch plupload to take references to the drop_element and browse_button so parts of the interface can be conditionally shown / hidden without breaking the buttons.

## 0.6.9 (May 25, 2015)
* Reset `progress` when all files have finished uploading in the queue.

## 0.6.8 (May 25, 2015)
* Always trigger the `when-queued` event even if the file is invalid. Promise returning functions `read` and `upload` will always be rejected with the error.
* Expose `refresh` on the queue for those having trouble with misaligned plupload input masks. Internally, the uploader will try to refresh the position of the mask at times where there might be changes in templates.

## 0.6.7 (May 24, 2015)
* Rename `features` to `dropzone` (with an alias setup for features).
* Fix #14 by patching dragenter and dragleave events
* Apply `pointer-events: none` to all children of the dropzone so dragenter and dragleave events are stable.

## 0.6.5 (May 24, 2015)
* Set `Content-Type` in the headers if the file is being sent as a binary blob, otherwise, stick it into the multipart_params. These defaults allow for easy integration with uploading directly to S3.

## 0.6.4 (May 24, 2015)
* #13 Fix dropzone hover events

## 0.6.3 (May 23, 2015)
* Simplify the interface to deal with drag and drop. This doesn't change the current semantics, but the old style semantics will be dropped in a future release. The `features.drag-and-drop` is flattened onto the second yield param and has the properties `id`, `enabled`, `valid`, and `active`.
* Add `for-dropzone` so uploaders can easily use the `<body>` element as their dropzone.

## 0.6.2 (May 23, 2015)
* `contentType` is now sent in the multipart_params by default. Otherwise, the `Content-Type` of the form submission would be overriden and the file simply wouldn't upload.

## 0.6.1 (May 19, 2015)
* Update plupload bower component.
* Allow settings to be unset when uploading. (For example, some users may not want to have the `Content-Type` header sent)

## 0.6.0 (May 12, 2015)
* #9 [BREAKING CHANGE] The `contentType` property now refers to the actual content type of the file to send. Use the `multipart` setting to determine whether the file will be sent in multiple parts using form data, or whether it's sent as a binary blob

## 0.5.1 (May 9, 2015)
* #9 [BREAKING CHANGE] `pl-uploader` components no longer accept the following attributes: `action`, `headers`, `accept`, `send-file-as`, `multipart-params`, `max-retries`, `chunk-size`, and `file-key`. These properties must now be sent via the `upload` method on files passed to the `when-queued` action.
