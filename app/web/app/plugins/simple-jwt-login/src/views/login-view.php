<?php

use SimpleJWTLogin\Modules\SimpleJWTLoginSettings;
use SimpleJWTLogin\SettingsErrors;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly
?>
<div class="row">
    <div class="col-md-4">
        <h3 class="section-title"><?php echo __( 'Allow Auto-Login', 'simple-jwt-login' ); ?></h3>

        <div class="form-group">
            <input type="radio" id="allow_autologin_no" name="allow_autologin" class="form-control"
                   value="0"
				<?php echo( $jwtSettings->getAllowAutologin() === false ? 'checked' : '' ); ?> />
            <label for="allow_autologin_no"><?php echo __( 'No', 'simple-jwt-login' ); ?></label>

            <input type="radio" id="allow_autologin_yes" name="allow_autologin" class="form-control"
                   value="1" <?php echo( $jwtSettings->getAllowAutologin() === true ? 'checked' : '' ); ?> />
            <label for="allow_autologin_yes"><?php echo __( 'Yes', 'simple-jwt-login' ); ?></label>
            <br/>
        </div>
    </div>
</div>
<hr />


<div class="row">
    <div class="col-md-12">
        <h3 class=section-title><?php echo __( 'URL Example', 'simple-jwt-login' ); ?></h3>
        <div class="generated-code">
            <span class="method">GET:</span>
            <span class="code">
            <?php
            $sampleUrlParams = [
	            $jwtSettings->getRequestKeyUrl() => __( 'JWT', 'simple-jwt-login' )
            ];
            if ( $jwtSettings->getRequireLoginAuthKey() ) {
	            $sampleUrlParams[ $jwtSettings->getAuthCodeKey() ] = __( 'AUTH_KEY_VALUE', 'simple-jwt-login' );
            }
            echo $jwtSettings->generateExampleLink( 'autologin', $sampleUrlParams );
            ?>
        </span>
            <span class="copy-button">
            <button class="btn btn-secondary btn-xs">
                <?php echo __( 'Copy', 'simple-jwt-login' ); ?>
            </button>
        </span>
        </div>
        <Br/>
        <span class="code-info">
        * <?php echo __( 'You can also send the JWT in Authorization header. Example:', 'simple-jwt-login' ) ?> <b>Authorization: Bearer YOURJWTTOKEN</b>
    </span>
    </div>
</div>
<hr/>

<div class="row">
    <div class="col-md-12">
        <h3 class="section-title"><?php echo __( 'Auto-Login Requires Auth Code', 'simple-jwt-login' ); ?></h3>
        <div class="form-group">
            <input type="radio" id="require_login_auth_no" name="require_login_auth" class="form-control"
                   value="0"
				<?php echo $jwtSettings->getRequireLoginAuthKey() === false ? 'checked' : '' ?>
            />
            <label for="require_login_auth_no">
				<?php echo __( 'No', 'simple-jwt-login' ); ?>
            </label>
            <input type="radio" id="require_login_auth_yes" name="require_login_auth" class="form-control"
                   value="1"
				<?php echo $jwtSettings->getRequireLoginAuthKey() === true ? 'checked' : '' ?>
            />
            <label for="require_login_auth_yes">
				<?php echo __( 'Yes', 'simple-jwt-login' ); ?>
            </label>
        </div>
    </div>
</div>
<hr/>

<div class="row">
    <div class="col-md-12">
        <h3 class="section-title">
            <?php
            echo isset($errorCode)
            && SettingsErrors::generateCode(SettingsErrors::PREFIX_LOGIN, SettingsErrors::ERR_LOGIN_MISSING_JWT_PARAMETER_KEY) === $errorCode
                ? '<span class="simple-jwt-error">!</span>'
                : ''
            ?>
            <?php echo __( 'JWT Login Settings', 'simple-jwt-login' ); ?>
        </h3>
    </div>
</div>

<div class="row">
    <div class="col-md-6">
        <label for="jwt_login_by"><?php echo __( 'Action', 'simple-jwt-login' ); ?></label>
        <select name="jwt_login_by" class="form-control" id="jwt_login_by">
            <option value="0"
				<?php
				echo $jwtSettings->getJWTLoginBy() === SimpleJWTLoginSettings::JWT_LOGIN_BY_EMAIL
					? 'selected'
					: ''
				?>
            ><?php echo __( 'Log in by Email', 'simple-jwt-login' ); ?></option>
            <option value="1"
				<?php
				echo $jwtSettings->getJWTLoginBy() === SimpleJWTLoginSettings::JWT_LOGIN_BY_WORDPRESS_USER_ID
					? 'selected'
					: ''
				?>
            ><?php echo __( 'Log in by WordPress User ID', 'simple-jwt-login' ); ?></option>
            <option value="2"
		        <?php
		        echo $jwtSettings->getJWTLoginBy() === SimpleJWTLoginSettings::JWT_LOGIN_BY_USER_LOGIN
			        ? 'selected'
			        : ''
		        ?>
            ><?php echo __( 'Log in by WordPress Username', 'simple-jwt-login' ); ?></option>
        </select>
    </div>
    <div class="col-md-4">
        <label for="jwt_login_by_paramter"><?php echo __( 'JWT parameter key | JWT payload data id ( key name where the option is saved )',
				'simple-jwt-login' ); ?></label>

        <input type="text" name="jwt_login_by_parameter" class="form-control"
               id="jwt_login_by_paramter"
               value="<?php echo $jwtSettings->getJwtLoginByParameter(); ?>"
               placeholder="<?php echo __( 'JWT Parameter here. Example: email', 'simple-jwt-login' ); ?>"
        />
        <br/>
        <p>
			<?php echo __( 'You can use `.` (dot) as a separator for sub-array values.', 'simple-jwt-login' ); ?>
            <br/>
			<?php echo __( 'Example: Use `user.id` for getting key `id` from array `user`', 'simple-jwt-login' ); ?>
        </p>
    </div>
</div>
<hr/>

<div class="row">
    <div class="col-md-12">
        <h3 class="section-title">
            <?php
            echo isset($errorCode)
            && SettingsErrors::generateCode(SettingsErrors::PREFIX_LOGIN, SettingsErrors::ERR_LOGIN_INVALID_CUSTOM_URL) === $errorCode
                ? '<span class="simple-jwt-error">!</span>'
                : ''
            ?>
            <?php echo __( 'Redirect after Auto-Login', 'simple-jwt-login' ); ?>
        </h3>
        <div class="form-group">
            <input type="radio" id="redirect_dashboard" name="redirect" class="form-control"
                   value="<?php echo SimpleJWTLoginSettings::REDIRECT_DASHBOARD; ?>"
				<?php echo( $jwtSettings->getRedirect() === SimpleJWTLoginSettings::REDIRECT_DASHBOARD ? 'checked' : '' ); ?>
            />
            <label for="redirect_dashboard"><?php echo __( 'Dashboard', 'simple-jwt-login' ); ?></label>
            <br/>
            <input type="radio" id="redirect_homepage" name="redirect" class="form-control"
                   value="<?php echo SimpleJWTLoginSettings::REDIRECT_HOMEPAGE; ?>"
				<?php echo( $jwtSettings->getRedirect() === SimpleJWTLoginSettings::REDIRECT_HOMEPAGE ? 'checked' : '' ); ?>
            />
            <label for="redirect_homepage"><?php echo __( 'Homepage', 'simple-jwt-login' ); ?></label>
            <br/>
            <input type="radio" id="no_redirect" name="redirect" class="form-control"
                   value="<?php echo SimpleJWTLoginSettings::NO_REDIRECT; ?>"
                <?php echo( $jwtSettings->getRedirect() === SimpleJWTLoginSettings::NO_REDIRECT ? 'checked' : '' ); ?>
            />

            <label for="no_redirect"><?php echo __( 'No Redirect', 'simple-jwt-login' ); ?></label>
            <br/>
            <input type="radio" id="redirect_custom" name="redirect" class="form-control"
                   value="<?php echo SimpleJWTLoginSettings::REDIRECT_CUSTOM; ?>"
				<?php echo( $jwtSettings->getRedirect() === SimpleJWTLoginSettings::REDIRECT_CUSTOM ? 'checked' : '' ); ?>
            />
            <label for="redirect_custom"><?php echo __( 'Custom', 'simple-jwt-login' ); ?></label>
            <br/>
            <input type="text" id="redirect_url" name="redirect_url" class="form-control"
                   placeholder="<?php echo __( 'Example',
				       'simple-jwt-login' ); ?>: https://www.your-site.com/sample-page"
                   value="<?php echo $jwtSettings->getCustomRedirectURL() ?>"
                   style="<?php echo( $jwtSettings->getRedirect() === SimpleJWTLoginSettings::REDIRECT_CUSTOM
				       ? ''
				       : 'display:none;'
			       ); ?>"
            />
        </div>
    </div>
    <div class="col-md-12">
        <input
                type="checkbox"
                name="include_login_request_parameters"
                id="include_login_request_parameters"
                value="1"
                <?php echo $jwtSettings->getShouldIncludeRequestParameters() ? 'checked' : '' ?>
        />
        <label for="include_login_request_parameters">
            <?php echo __('Include request parameters used for login link in the REDIRECT URL', 'simple-jwt-login');?>
        </label>
    </div>

    <div class="col-md-12">
        <input
                type="checkbox"
                name="allow_usage_redirect_parameter"
                id="allow_usage_redirect_parameter"
                value="1"
			<?php echo $jwtSettings->isRedirectParameterAllowed() ? 'checked' : '' ?>
        />
        <label for="allow_usage_redirect_parameter">
			<?php echo sprintf(
			        __('Allow redirect to a specific URL if `%s` is present in the request. This option will overwrite previous redirect that was set.', 'simple-jwt-login'),
                    SimpleJWTLoginSettings::REDIRECT_URL_PARAMETER
            );
            ?>
        </label>
        <p><?php echo sprintf(
                __('You can attach to your redirect an URL parameter `%s` that will be used for redirect instead of the defined ones.','simple-jwt-login'),
                SimpleJWTLoginSettings::REDIRECT_URL_PARAMETER
        );?>
        </p>

        <div class="simple-jwt-url-variables">
            You can use the following variables in your URL:<br />
            <ol>
                <li><b>{{site_url}}</b> : Site URL</li>
                <li><b>{{user_id}}</b> : Logged in user ID</li>
                <li><b>{{user_email}}</b> : Logged in user email</li>
                <li><b>{{user_login}}</b> : Logged in username</li>
                <li><b>{{user_first_name}}</b> : User first name</li>
                <li><b>{{user_last_name}}</b> : User last name</li>
                <li><b>{{user_nicename}}</b> : User nice name</li>
            </ol>
            <Br />
            Example: https://<?php echo site_url();?>?param1={{site_url}}&amp;param2={{user_id}}
        </div>
    </div>
</div>
<hr/>

<div class="row">
    <div class="col-md-12">
        <h3 class="section-title"><?php echo __( 'Allow Auto-Login only from the following IP addresses',
				'simple-jwt-login' ); ?>:</h3>
        <div class="form-group">
            <input type="text" id="login_ip" name="login_ip" class="form-control"
                   value="<?php echo $jwtSettings->getAllowedLoginIps(); ?>"
                   placeholder="<?php echo __( 'Enter IP here', 'simple-jwt-login' ); ?>"/>
            <small>
				<?php echo __( "If you want to add more IP's, separate them by comma", 'simple-jwt-login' ); ?>.
                <br/>
				<?php echo __( 'Leave blank to allow all IP addresses', 'simple-jwt-login' ); ?>.
            </small>
        </div>
    </div>
</div>
